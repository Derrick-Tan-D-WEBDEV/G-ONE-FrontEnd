import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbSignupComponent } from './breadcrumb-signup.component';

describe('BreadcrumbSignupComponent', () => {
  let component: BreadcrumbSignupComponent;
  let fixture: ComponentFixture<BreadcrumbSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
