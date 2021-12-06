import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbAuthorsComponent } from './breadcrumb-authors.component';

describe('BreadcrumbAuthorsComponent', () => {
  let component: BreadcrumbAuthorsComponent;
  let fixture: ComponentFixture<BreadcrumbAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbAuthorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
