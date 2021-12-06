import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTwoComponent } from './explore-two.component';

describe('ExploreTwoComponent', () => {
  let component: ExploreTwoComponent;
  let fixture: ComponentFixture<ExploreTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
