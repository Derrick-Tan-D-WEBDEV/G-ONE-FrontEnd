import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionsTwoSectionComponent } from './auctions-two-section.component';

describe('AuctionsTwoSectionComponent', () => {
  let component: AuctionsTwoSectionComponent;
  let fixture: ComponentFixture<AuctionsTwoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionsTwoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionsTwoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
