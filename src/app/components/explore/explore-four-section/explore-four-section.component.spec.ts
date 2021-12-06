import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreFourSectionComponent } from './explore-four-section.component';

describe('ExploreFourSectionComponent', () => {
  let component: ExploreFourSectionComponent;
  let fixture: ComponentFixture<ExploreFourSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreFourSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreFourSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
