import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbBlogSingleComponent } from './breadcrumb-blog-single.component';

describe('BreadcrumbBlogSingleComponent', () => {
  let component: BreadcrumbBlogSingleComponent;
  let fixture: ComponentFixture<BreadcrumbBlogSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbBlogSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbBlogSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
