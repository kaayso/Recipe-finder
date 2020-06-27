import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { CookiesService } from './cookies.service';
import { api } from '../ws/api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedUser: string;
  apiRoot: string = 'http://localhost:4000/';

  constructor(
    private http: HttpClient,
    private cookiesService: CookiesService,
    private router: Router
  ) {}

  /**
   * setup jwt and user id
   * @param {string} ep
   * @param {string} body
   * @return {boolean} response
   */
  login(ep: string, body: string): Observable<boolean> {
    return this.http.post<any>(`${this.apiRoot}${ep}`, body).pipe(
      tap((data) => {
        this.doLoginUser(data);
      }),
      mapTo(true),
      catchError((error) => {
        console.log(error.message);
        return of(false);
      })
    );
  }

  /**
   * remove jwt and user id
   * @param {string} ep
   * @param {string} body
   * @return {boolean} response
   */
  logout(ep: string, body: string): Observable<boolean> {
    return this.http.post<any>(`${this.apiRoot}${ep}`, body).pipe(
      tap(() => {
        this.doLogoutUser();
      }),
      mapTo(true),
      catchError((error) => {
        console.log(error.message);
        return of(false);
      })
    );
  }

  /**
   * setup uid and tokens
   * @param {object} data
   */
  doLoginUser(data: any) {
    const { token, refreshToken, uid } = data;
    this.loggedUser = uid;
    this.storeTokens({ token, refreshToken });
  }

  /**
   * setup uid and tokens
   */
  doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  /**
   * store tokens in cookies
   * @param {object} data
   */
  storeTokens(data: any) {
    this.cookiesService.setCookie('token', data.token);
    this.cookiesService.setCookie('refreshToken', data.refreshToken);
  }

  /**
   * store refresh token in cookies
   * @param {token} string
   */
  storeRefreshedToken(token) {
    this.cookiesService.setCookie('token', token);
  }

  /**
   * remove tokens
   */
  removeTokens() {
    this.cookiesService.deleteCookie('token');
    this.cookiesService.deleteCookie('refreshToken');
  }

  /**
   * get token by cookie name
   * @param name {string}
   */
  getJwtToken(name: string) {
    return this.cookiesService.getCookie(name);
  }

  /**
   * refresh token
   */
  refreshToken() {
    if (!this.getJwtToken('refreshToken')) {
      this.router.navigateByUrl('/login');
      return throwError('[cookies] refresh token is undefined');
    }
    return this.http
      .post<any>(`${this.apiRoot}${api.Token}`, {
        token: this.getJwtToken('refreshToken'),
      })
      .pipe(tap((data) => this.storeRefreshedToken(data.token)));
  }

  /**
   * return current user
   */
  isLoggedIn() {
    return this.loggedUser ? true : false;
  }
}
