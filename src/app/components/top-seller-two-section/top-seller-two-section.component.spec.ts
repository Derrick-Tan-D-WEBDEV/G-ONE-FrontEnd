import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellerTwoSectionComponent } from './top-seller-two-section.component';

describe('TopSellerTwoSectionComponent', () => {
  let component: TopSellerTwoSectionComponent;
  let fixture: ComponentFixture<TopSellerTwoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSellerTwoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSellerTwoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
