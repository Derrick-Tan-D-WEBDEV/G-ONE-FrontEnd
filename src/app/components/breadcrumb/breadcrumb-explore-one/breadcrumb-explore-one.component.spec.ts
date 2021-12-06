import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbExploreOneComponent } from './breadcrumb-explore-one.component';

describe('BreadcrumbExploreOneComponent', () => {
  let component: BreadcrumbExploreOneComponent;
  let fixture: ComponentFixture<BreadcrumbExploreOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbExploreOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbExploreOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
