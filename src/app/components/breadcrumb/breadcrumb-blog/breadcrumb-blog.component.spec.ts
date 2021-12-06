import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbBlogComponent } from './breadcrumb-blog.component';

describe('BreadcrumbBlogComponent', () => {
  let component: BreadcrumbBlogComponent;
  let fixture: ComponentFixture<BreadcrumbBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
