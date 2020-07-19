import { Injectable } from '@angular/core';
import * as cryptoJS from 'crypto-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AesEncryptDecryptService {
  secretKey = environment.pwdEncryptionKey;
  constructor() {}

  encrypt(value: string): string {
    return cryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  decrypt(textToDecrypt: string) {
    return cryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(
      cryptoJS.enc.Utf8
    );
  }
}
