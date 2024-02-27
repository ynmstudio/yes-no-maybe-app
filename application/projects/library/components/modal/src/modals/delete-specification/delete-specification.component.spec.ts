import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSpecificationComponent } from './delete-specification.component';

describe('DeleteSpecificationComponent', () => {
  let component: DeleteSpecificationComponent;
  let fixture: ComponentFixture<DeleteSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSpecificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
