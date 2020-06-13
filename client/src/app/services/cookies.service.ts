import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  isConsented = false;

  constructor() {}

  /**
   * delete cookie
   * @param name
   */
  public deleteCookie(name) {
    this.setCookie(name, '', -1);
  }

  /**
   * get cookie
   * @param {string} name
   * @returns {string}
   */
  public getCookie(name: string) {
    const ca: Array<string> = decodeURIComponent(document.cookie).split(';');
    const cookieName = `${name}=`;
    let c: string;

    for (let el of ca) {
      c = el.replace(/^\s+/g, '');
      if (c.indexOf(cookieName) === 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  /**
   * set cookie
   * @param {string} name
   * @param {string} value
   * @param {number} expireDays
   * @param {string} path
   */
  public setCookie(
    name: string,
    value: string,
    expireDays: number,
    path: string = ''
  ) {
    const d: Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    const cPath = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cPath}`;
  }

  /**
   * consent
   * @param {boolean} isConsent
   * @param e
   * @param {string} COOKIE
   * @param {string} EXPIRE_DAYS
   * @returns {boolean}
   */
  public consent(
    isConsent: boolean,
    e: any,
    COOKIE: string,
    EXPIRE_DAYS: number
  ) {
    if (!isConsent) {
      return this.isConsented;
    } else {
      this.setCookie(COOKIE, '1', EXPIRE_DAYS);
      this.isConsented = true;
      e.preventDefault();
    }
  }
}
