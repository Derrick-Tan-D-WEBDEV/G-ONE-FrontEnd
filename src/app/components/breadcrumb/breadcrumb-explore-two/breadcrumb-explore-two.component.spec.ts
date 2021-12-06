import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbExploreTwoComponent } from './breadcrumb-explore-two.component';

describe('BreadcrumbExploreTwoComponent', () => {
  let component: BreadcrumbExploreTwoComponent;
  let fixture: ComponentFixture<BreadcrumbExploreTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbExploreTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbExploreTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
