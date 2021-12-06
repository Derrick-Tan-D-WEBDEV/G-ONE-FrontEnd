import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTitleSectionComponent } from './home-title-section.component';

describe('HomeTitleSectionComponent', () => {
  let component: HomeTitleSectionComponent;
  let fixture: ComponentFixture<HomeTitleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTitleSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTitleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
