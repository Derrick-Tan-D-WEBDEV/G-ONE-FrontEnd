import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbItemDetailsComponent } from './breadcrumb-item-details.component';

describe('BreadcrumbItemDetailsComponent', () => {
  let component: BreadcrumbItemDetailsComponent;
  let fixture: ComponentFixture<BreadcrumbItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
