import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSingleSectionComponent } from './blog-single-section.component';

describe('BlogSingleSectionComponent', () => {
  let component: BlogSingleSectionComponent;
  let fixture: ComponentFixture<BlogSingleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSingleSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSingleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
