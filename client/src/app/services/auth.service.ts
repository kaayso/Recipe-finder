import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiRoot: string = 'http://localhost:4000/';
  private userId = new Subject<any>();
  private isConnected  = new Subject<any>();

  /**
   * get auth token and user id
   * @param {string} ep
   * @param {string} body
   */
  login(ep: string, body: string) {
    return this.http
      .post<any>(`${this.apiRoot}${ep}`, body)
      .pipe(shareReplay(1)); // prevent multiple subcription and return last val
  }

  /**
   * get uid observable
  */
  getUserId() : Observable<any> {
    return this.userId.asObservable();
  }

  /**
   * set uid
   * @param {string} user id
  */
  setUserId (uid) {
    this.userId.next(uid);
  }

  /**
   * get user
  */
  getUserConnectionState() : Observable<any> {
    return this.isConnected.asObservable();
  }

  /**
   * set uid
   * @param {boolean} connection status
  */
  setUserConnectionState (isConnected) {
    this.isConnected.next(isConnected);
  }

}
