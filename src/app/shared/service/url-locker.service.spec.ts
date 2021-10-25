import { TestBed } from '@angular/core/testing';

import { UrlLockerService } from './url-locker.service';

describe('UrlLockerService', () => {
  let service: UrlLockerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlLockerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
