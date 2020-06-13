import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const idToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZWQ3YmFmY2FmN2IyNzFkOTRiMTg5MzciLCJpYXQiOjE1OTE1Mzg1MjYsImV4cCI6NDc0NzI5ODUyNn0.rU9GVd5SoyJFeFnud0PB2HBNFzmKZ_2LwBaJ1SnSVq0'; // get token cookies

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
