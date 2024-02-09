import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRoundComponent } from './new-round.component';

describe('NewRoundComponent', () => {
  let component: NewRoundComponent;
  let fixture: ComponentFixture<NewRoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
