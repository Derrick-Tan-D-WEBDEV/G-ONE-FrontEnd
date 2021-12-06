import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbHelpCenterComponent } from './breadcrumb-help-center.component';

describe('BreadcrumbHelpCenterComponent', () => {
  let component: BreadcrumbHelpCenterComponent;
  let fixture: ComponentFixture<BreadcrumbHelpCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbHelpCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbHelpCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
