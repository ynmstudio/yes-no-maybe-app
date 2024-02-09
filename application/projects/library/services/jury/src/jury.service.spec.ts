import { TestBed } from '@angular/core/testing';

import { JuryService } from './jury.service';

describe('JuryService', () => {
  let service: JuryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
