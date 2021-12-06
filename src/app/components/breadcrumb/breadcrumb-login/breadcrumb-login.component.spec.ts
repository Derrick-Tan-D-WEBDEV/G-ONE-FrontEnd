import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbLoginComponent } from './breadcrumb-login.component';

describe('BreadcrumbLoginComponent', () => {
  let component: BreadcrumbLoginComponent;
  let fixture: ComponentFixture<BreadcrumbLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
