import { TestBed } from '@angular/core/testing';

import { HasuraService } from './hasura.service';

describe('HasuraService', () => {
  let service: HasuraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HasuraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
