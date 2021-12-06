import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellerSectionComponent } from './top-seller-section.component';

describe('TopSellerSectionComponent', () => {
  let component: TopSellerSectionComponent;
  let fixture: ComponentFixture<TopSellerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSellerSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSellerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
