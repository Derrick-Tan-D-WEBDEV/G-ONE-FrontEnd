import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAuctionsComponent } from './live-auctions.component';

describe('LiveAuctionsComponent', () => {
  let component: LiveAuctionsComponent;
  let fixture: ComponentFixture<LiveAuctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveAuctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveAuctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
