import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookiesService } from '../services/cookies.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(private cookiesService: CookiesService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const idToken = this.cookiesService.getCookie('token');

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
    if (idToken) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + idToken),
      });
    }
    return next.handle(req);
  }
}
