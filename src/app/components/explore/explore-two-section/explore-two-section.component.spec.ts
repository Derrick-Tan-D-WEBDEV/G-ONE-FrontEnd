import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTwoSectionComponent } from './explore-two-section.component';

describe('ExploreTwoSectionComponent', () => {
  let component: ExploreTwoSectionComponent;
  let fixture: ComponentFixture<ExploreTwoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreTwoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreTwoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
