import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreFiveSectionComponent } from './explore-five-section.component';

describe('ExploreFiveSectionComponent', () => {
  let component: ExploreFiveSectionComponent;
  let fixture: ComponentFixture<ExploreFiveSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreFiveSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreFiveSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
