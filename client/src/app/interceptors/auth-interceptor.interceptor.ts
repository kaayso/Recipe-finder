import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookiesService } from '../services/cookies.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(private cookiesService: CookiesService, private authService: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const endPoint = req.url.slice(req.url.length - 7, req.url.length - 1);
    let idToken = this.cookiesService.getCookie('token');
 
    if (endPoint === '/token') {
      idToken = this.cookiesService.getCookie('refreshToken');
    }
    
    if (idToken) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + idToken),
      });
    } else if (endPoint !== '/login') {
      this.authService.setUserConnectionState(false);
      this.router.navigateByUrl('/');
    }

    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json'),
      });
    }
    if (!req.withCredentials) {
      req = req.clone({
        withCredentials: false,
      });
    }

    return next.handle(req);
  }
}
