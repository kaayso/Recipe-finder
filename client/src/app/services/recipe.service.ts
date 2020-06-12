import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}
  accessToken: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZWQ3YmFmY2FmN2IyNzFkOTRiMTg5MzciLCJpYXQiOjE1OTE1Mzg1MjYsImV4cCI6NDc0NzI5ODUyNn0.rU9GVd5SoyJFeFnud0PB2HBNFzmKZ_2LwBaJ1SnSVq0';
  apiRoot: string = 'http://localhost:4000/api/recipe/';

  getRecipes() {
    return this.http
      .get<any>(`${this.apiRoot}?page=2&limit=3`, {
        headers: new HttpHeaders({
          Authorization: `bearer ${this.accessToken}`,
        }),
      })
      .toPromise()
      .then((res) => res.data)
      .catch((errMsg) =>
        console.error(`Error: ${errMsg.status} ${errMsg.statusText}.`)
      );
  }
}
