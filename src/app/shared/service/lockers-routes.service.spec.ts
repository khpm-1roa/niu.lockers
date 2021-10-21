import { TestBed } from '@angular/core/testing';

import { LockersRoutesService } from './lockers-routes.service';

describe('LockersRoutesService', () => {
  let service: LockersRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LockersRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
