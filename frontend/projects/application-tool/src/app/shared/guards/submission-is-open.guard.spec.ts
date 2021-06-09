import { TestBed } from '@angular/core/testing';

import { SubmissionIsOpenGuard } from './submission-is-open.guard';

describe('SubmissionIsOpenGuard', () => {
  let guard: SubmissionIsOpenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SubmissionIsOpenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
