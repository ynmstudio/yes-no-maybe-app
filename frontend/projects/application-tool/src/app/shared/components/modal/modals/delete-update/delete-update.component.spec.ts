import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUpdateComponent } from './delete-update.component';

describe('DeleteUpdateComponent', () => {
  let component: DeleteUpdateComponent;
  let fixture: ComponentFixture<DeleteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
