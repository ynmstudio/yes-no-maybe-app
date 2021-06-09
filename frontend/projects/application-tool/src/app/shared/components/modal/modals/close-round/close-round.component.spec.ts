import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseRoundComponent } from './close-round.component';

describe('CloseRoundComponent', () => {
  let component: CloseRoundComponent;
  let fixture: ComponentFixture<CloseRoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseRoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
