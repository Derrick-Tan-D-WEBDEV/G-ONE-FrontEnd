import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListSectionComponent } from './app-list-section.component';

describe('AppListSectionComponent', () => {
  let component: AppListSectionComponent;
  let fixture: ComponentFixture<AppListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppListSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
