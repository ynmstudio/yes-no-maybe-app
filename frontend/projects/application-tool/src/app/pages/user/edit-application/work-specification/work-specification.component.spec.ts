import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSpecificationComponent } from './work-specification.component';

describe('WorkSpecificationComponent', () => {
  let component: WorkSpecificationComponent;
  let fixture: ComponentFixture<WorkSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkSpecificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
