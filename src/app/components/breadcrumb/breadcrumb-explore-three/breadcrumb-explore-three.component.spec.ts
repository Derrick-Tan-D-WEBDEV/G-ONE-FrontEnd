import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbExploreThreeComponent } from './breadcrumb-explore-three.component';

describe('BreadcrumbExploreThreeComponent', () => {
  let component: BreadcrumbExploreThreeComponent;
  let fixture: ComponentFixture<BreadcrumbExploreThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbExploreThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbExploreThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
