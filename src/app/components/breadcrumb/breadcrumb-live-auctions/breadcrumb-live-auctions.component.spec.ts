import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbLiveAuctionsComponent } from './breadcrumb-live-auctions.component';

describe('BreadcrumbLiveAuctionsComponent', () => {
  let component: BreadcrumbLiveAuctionsComponent;
  let fixture: ComponentFixture<BreadcrumbLiveAuctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbLiveAuctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbLiveAuctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
