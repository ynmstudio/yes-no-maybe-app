import { TestBed } from '@angular/core/testing';

import { EmbedService } from './embed.service';

describe('EmbedService', () => {
  let service: EmbedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmbedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
