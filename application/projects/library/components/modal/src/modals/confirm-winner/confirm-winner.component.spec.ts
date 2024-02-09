import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmWinnerComponent } from './confirm-winner.component';

describe('ConfirmWinnerComponent', () => {
  let component: ConfirmWinnerComponent;
  let fixture: ComponentFixture<ConfirmWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmWinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
