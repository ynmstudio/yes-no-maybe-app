import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuryComponent } from './jury.component';

describe('JuryComponent', () => {
  let component: JuryComponent;
  let fixture: ComponentFixture<JuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
