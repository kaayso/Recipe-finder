import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { catchError, switchMap, filter, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  private isRefreshed = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let jwtToken = this.authService.getJwtToken('token');
    if (jwtToken) {
      req = this.addToken(req, jwtToken);
    }

    if (!req.headers.has('Content-Type')) {
      req = this.addContentType(req);
    }

    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(req, next);
        } else {
          return throwError(error);
        }
      })
    );
  }

  private addToken(
    req: HttpRequest<unknown>,
    token: string
  ): HttpRequest<unknown> {
    return req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token),
    });
  }

  private addContentType(req: HttpRequest<unknown>): HttpRequest<unknown> {
    return req.clone({
      headers: req.headers.set('Content-Type', 'application/json'),
    });
  }

  private handle401Error(req: HttpRequest<unknown>, next: HttpHandler) {
    if (!this.isRefreshed) {
      this.isRefreshed = true;
      this.refreshTokenSubject.next(null);
      return this.authService.refreshToken().pipe(
        switchMap((data: any) => {
          this.isRefreshed = true;
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
}
