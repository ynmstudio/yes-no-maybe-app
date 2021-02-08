import { TestBed } from '@angular/core/testing';

import { MultilangService } from './multilang.service';

describe('MultilangService', () => {
  let service: MultilangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultilangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
