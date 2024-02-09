import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFilesComponent } from './work-files.component';

describe('WorkFilesComponent', () => {
  let component: WorkFilesComponent;
  let fixture: ComponentFixture<WorkFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
