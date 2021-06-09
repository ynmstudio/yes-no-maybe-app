import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPortfolioComponent } from './work-portfolio.component';

describe('WorkPortfolioComponent', () => {
  let component: WorkPortfolioComponent;
  let fixture: ComponentFixture<WorkPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
