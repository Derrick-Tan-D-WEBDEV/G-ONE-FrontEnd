import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionsOneSectionComponent } from './auctions-one-section.component';

describe('AuctionsOneSectionComponent', () => {
  let component: AuctionsOneSectionComponent;
  let fixture: ComponentFixture<AuctionsOneSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionsOneSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionsOneSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
