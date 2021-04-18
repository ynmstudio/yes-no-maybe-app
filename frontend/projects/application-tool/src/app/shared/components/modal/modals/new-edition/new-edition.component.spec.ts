import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditionComponent } from './new-edition.component';

describe('NewEditionComponent', () => {
  let component: NewEditionComponent;
  let fixture: ComponentFixture<NewEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
