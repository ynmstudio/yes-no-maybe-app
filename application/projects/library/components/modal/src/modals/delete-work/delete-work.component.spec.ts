import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWorkComponent } from './delete-work.component';

describe('DeleteWorkComponent', () => {
  let component: DeleteWorkComponent;
  let fixture: ComponentFixture<DeleteWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
