import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  constructor() {}

  getCookie(name) {
    const cookies = decodeURIComponent(document.cookie).split(';');
    const cookieMap = new Map();
    for (let c of cookies) {
      const cookie = c.trim().split('=');
      cookieMap.set(cookie[0], cookie[1]);
    }

    if (cookieMap.has(name)) return cookieMap.get(name);
    return '';
  }

  setCookie(name: string, value: string) {
    document.cookie = `${name}=${value}; path=/`;
  }

  deleteCookie(name: string) {
    const cookies = decodeURIComponent(document.cookie).split(';');
    const cookieMap = new Map();
    for (let c of cookies) {
      const cookie = c.trim().split('=');
      cookieMap.set(cookie[0], cookie[1]);
    }

    if (cookieMap.has(name))
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }
}
