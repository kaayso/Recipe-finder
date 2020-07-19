import { TestBed } from '@angular/core/testing';

import { AesEncryptDecryptService } from './aes-encrypt-decrypt.service';

describe('AesEncryptDecryptService', () => {
  let service: AesEncryptDecryptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AesEncryptDecryptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
