import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CookiesService } from 'src/app/services/cookies.service';
import { catchError, switchMap, filter, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  private isRefreshed = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  constructor(
    private authService: AuthService,
    private cookiesService: CookiesService,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let jwtToken = this.authService.getJwtToken('token');
    if (jwtToken) {
      req = this.addToken(req, jwtToken);
    }

    let uid = this.cookiesService.getCookie('userId');
    if (uid) {
      // resources manipulation needs uid for auth middleware
      req = this.addUid(req, uid);
    }

    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 403) {
          return this.handle403Error(req, next);
        } else if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(req, next).pipe(
            catchError((error) => {
              if (error instanceof HttpErrorResponse && error.status === 403) {
                return this.handle403Error(req, next);
              }
            })
          );
        } else {
          return throwError(error);
        }
      })
    );
  }

  private addUid(req: HttpRequest<unknown>, uid: string): HttpRequest<unknown> {
    return req.clone({
      headers: req.headers.set('uid', uid),
    });
  }

  private addToken(
    req: HttpRequest<unknown>,
    token: string
  ): HttpRequest<unknown> {
    return req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token),
    });
  }

  private handle401Error(req: HttpRequest<unknown>, next: HttpHandler) {
    if (!this.isRefreshed) {
      this.isRefreshed = true;
      this.refreshTokenSubject.next(null);
      return this.authService.refreshToken().pipe(
        switchMap((data: any) => {
          this.isRefreshed = false;
          this.refreshTokenSubject.next(data.token);

          return next.handle(this.addToken(req, data.token));
        })
      );
    } else {
      this.refreshTokenSubject.pipe(
        filter((token) => token !== null),
        take(1),
        switchMap((token: any) => {
          return next.handle(this.addToken(req, token));
        })
      );
    }
  }

  private handle403Error(req: HttpRequest<unknown>, next: HttpHandler) {
    this.authService
      .logout()
      .subscribe(() => this.router.navigateByUrl('/login'));
    return next.handle(req);
  }
}
