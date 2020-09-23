import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  constructor(private http: HttpClient) {}

  // GET resources according to end point
  get(ep) {
    return this.http
      .get<any>(`${environment.apiUrl}${ep}`)
      .pipe(shareReplay(1));
  }

  // POST
  post(ep, body) {
    return this.http
      .post<any>(`${environment.apiUrl}${ep}`, body)
      .pipe(shareReplay(1));
  }

  // PUT
  put(ep, body) {
    return this.http
      .put<any>(`${environment.apiUrl}${ep}`, body)
      .pipe(shareReplay(1));
  }

  // DELETE
  delete(ep) {
    return this.http
      .delete<any>(`${environment.apiUrl}${ep}`)
      .pipe(shareReplay(1));
  }
}
