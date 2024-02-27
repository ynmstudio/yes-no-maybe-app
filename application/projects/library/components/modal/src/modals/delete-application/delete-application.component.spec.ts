import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteApplicationComponent } from './delete-application.component';

describe('DeleteApplicationComponent', () => {
  let component: DeleteApplicationComponent;
  let fixture: ComponentFixture<DeleteApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
