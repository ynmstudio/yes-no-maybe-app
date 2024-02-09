import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUpdateComponent } from './edit-update.component';

describe('EditUpdateComponent', () => {
  let component: EditUpdateComponent;
  let fixture: ComponentFixture<EditUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
