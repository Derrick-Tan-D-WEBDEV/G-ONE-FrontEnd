import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbExploreFourComponent } from './breadcrumb-explore-four.component';

describe('BreadcrumbExploreFourComponent', () => {
  let component: BreadcrumbExploreFourComponent;
  let fixture: ComponentFixture<BreadcrumbExploreFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbExploreFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbExploreFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
