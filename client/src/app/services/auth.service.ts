import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { Observable, of, throwError, Subject } from 'rxjs';
import { CookiesService } from './cookies.service';
import { api } from '../ws/api';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isConnected = new Subject<any>();
  private username = new Subject<any>();

  constructor(
    private http: HttpClient,
    private cookiesService: CookiesService,
    private router: Router
  ) {}

  /**
   * setup jwt and user id
   * @param {string} body
   * @return {any} response
   */
  login(body: any): Observable<any> {
    this.username.next(body.username);
    return this.http.post<any>(`${environment.apiUrl}${api.Login}`, body).pipe(
      tap((data) => {
        this.doLoginUser(data);
      }),
      mapTo({ ok: true, status: 200 }),
      catchError((error) => {
        return of({ ok: false, status: error.status });
      })
    );
  }

  /**
   * remove jwt and user id
   * @return {boolean} response
   */
  logout(): Observable<boolean> {
    const body = {
      token: this.getJwtToken('refreshToken'),
    };
    return this.http.post<any>(`${environment.apiUrl}${api.Logout}`, body).pipe(
      tap(() => {
        this.doLogoutUser();
      }),
      mapTo(true),
      catchError((error) => {
        this.doLogoutUser();
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
    this.storeTokens({ token, refreshToken });
    this.storeUserId(uid);
    this.isConnected.next(true);
  }

  /**
   * setup uid and tokens
   */
  doLogoutUser() {
    this.removeUserId();
    this.removeTokens();
    this.isConnected.next(false);
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
   * store user id in cookies
   * @param {string} uid
   */
  storeUserId(uid: string) {
    this.cookiesService.setCookie('userId', uid);
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
   * remove user id
   */
  removeUserId() {
    this.cookiesService.deleteCookie('userId');
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
      this.doLogoutUser();
      this.router.navigateByUrl('/login');
      return throwError('[cookies] refresh token is undefined');
    }
    return this.http
      .post<any>(`${environment.apiUrl}${api.Token}`, {
        refreshToken: this.getJwtToken('refreshToken'),
      })
      .pipe(tap((data) => this.storeRefreshedToken(data.token)));
  }

  /**
   * check if user is connected
   * @return {boolean} isConnected
   */
  isLoggedIn() {
    return this.cookiesService.getCookie('userId') ? true : false;
  }

  /**
   * observable on connexion user status
   */
  isUserConnected(): Observable<any> {
    return this.isConnected.asObservable();
  }

  /**
   * observable on username
   */
  getUsername(): Observable<any> {
    return this.username.asObservable();
  }

  /**
   * signup
   * @param {string} ep
   * @param {string} body
   * @return {any} response
   */
  signup(ep: string, body: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}${ep}`, body).pipe(
      tap((data) => {
        console.log(data);
      }),
      mapTo({ ok: true, status: 201 }),
      catchError((error) => {
        return of({ ok: false, status: error.status });
      })
    );
  }

  /**
   * save user infos in localStorage
   * @param items {array of object}
   */
  saveUserCredentials(items: any[]) {
    for (let item of items) {
      localStorage.setItem(item.key, item.value);
    }
  }

  /**
   * remove user infos in localStorage
   * @param items {array of string}
   */
  removeUserCredentials(items: string[]) {
    for (let item of items) {
      localStorage.removeItem(item);
    }
  }

  /**
   * get user info from localStorage
   * @param key {string}
   */
  getUserCredential(key: string) {
    return localStorage.getItem(key) ? localStorage.getItem(key) : null;
  }
}
