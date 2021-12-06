import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbWalletConnectComponent } from './breadcrumb-wallet-connect.component';

describe('BreadcrumbWalletConnectComponent', () => {
  let component: BreadcrumbWalletConnectComponent;
  let fixture: ComponentFixture<BreadcrumbWalletConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbWalletConnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbWalletConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
