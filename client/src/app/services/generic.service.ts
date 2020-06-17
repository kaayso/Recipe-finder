import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  constructor(private http: HttpClient) {}
  apiRoot: string =  'http://localhost:4000/';

  // GET ressources according to end point
  get(ep) {
    return this.http.get<any>(`${this.apiRoot}${ep}`).pipe(shareReplay(1));
  }

  // POST
  post(ep, body) {
    return this.http.post<any>(`${this.apiRoot}${ep}`, body)
      .pipe(shareReplay(1));
  }

  // PUT
  put(ep, body) {
    return this.http.put<any>(`${this.apiRoot}${ep}`, body)
      .pipe(shareReplay(1));
  }
}
