import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreOneSectionComponent } from './explore-one-section.component';

describe('ExploreOneSectionComponent', () => {
  let component: ExploreOneSectionComponent;
  let fixture: ComponentFixture<ExploreOneSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreOneSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreOneSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
