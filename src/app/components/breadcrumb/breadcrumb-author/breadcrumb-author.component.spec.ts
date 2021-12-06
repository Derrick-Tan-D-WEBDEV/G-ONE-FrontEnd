import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbAuthorComponent } from './breadcrumb-author.component';

describe('BreadcrumbAuthorComponent', () => {
  let component: BreadcrumbAuthorComponent;
  let fixture: ComponentFixture<BreadcrumbAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
