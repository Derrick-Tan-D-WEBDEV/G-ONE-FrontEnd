import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbCreateComponent } from './breadcrumb-create.component';

describe('BreadcrumbCreateComponent', () => {
  let component: BreadcrumbCreateComponent;
  let fixture: ComponentFixture<BreadcrumbCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
