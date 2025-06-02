import { TestBed } from '@angular/core/testing';

import { PersonalLibService } from './personal-lib.service';

describe('PersonalLibService', () => {
  let service: PersonalLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
