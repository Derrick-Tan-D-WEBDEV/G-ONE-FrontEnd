import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreThreeSectionComponent } from './explore-three-section.component';

describe('ExploreThreeSectionComponent', () => {
  let component: ExploreThreeSectionComponent;
  let fixture: ComponentFixture<ExploreThreeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreThreeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreThreeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
