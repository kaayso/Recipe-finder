import { TestBed } from '@angular/core/testing';

import { UserResourceService } from './user-resource.service';

describe('UserResourceService', () => {
  let service: UserResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
