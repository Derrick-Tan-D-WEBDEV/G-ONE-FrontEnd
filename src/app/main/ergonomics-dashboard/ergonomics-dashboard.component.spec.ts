import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgonomicsDashboardComponent } from './ergonomics-dashboard.component';

describe('ErgonomicsDashboardComponent', () => {
  let component: ErgonomicsDashboardComponent;
  let fixture: ComponentFixture<ErgonomicsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErgonomicsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErgonomicsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
