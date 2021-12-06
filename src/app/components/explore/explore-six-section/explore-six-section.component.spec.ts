import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSixSectionComponent } from './explore-six-section.component';

describe('ExploreSixSectionComponent', () => {
  let component: ExploreSixSectionComponent;
  let fixture: ComponentFixture<ExploreSixSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreSixSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreSixSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
