import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiRoot: string = 'http://localhost:4000/';

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
}
