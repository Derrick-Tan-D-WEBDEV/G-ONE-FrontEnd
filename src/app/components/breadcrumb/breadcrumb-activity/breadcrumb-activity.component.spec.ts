import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbActivityComponent } from './breadcrumb-activity.component';

describe('BreadcrumbActivityComponent', () => {
  let component: BreadcrumbActivityComponent;
  let fixture: ComponentFixture<BreadcrumbActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
