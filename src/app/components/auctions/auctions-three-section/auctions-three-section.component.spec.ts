import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionsThreeSectionComponent } from './auctions-three-section.component';

describe('AuctionsThreeSectionComponent', () => {
  let component: AuctionsThreeSectionComponent;
  let fixture: ComponentFixture<AuctionsThreeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionsThreeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionsThreeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
