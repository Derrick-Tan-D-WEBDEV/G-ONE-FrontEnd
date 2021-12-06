import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgonomicChangeSequenceComponent } from './ergonomic-change-sequence.component';

describe('ErgonomicChangeSequenceComponent', () => {
  let component: ErgonomicChangeSequenceComponent;
  let fixture: ComponentFixture<ErgonomicChangeSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErgonomicChangeSequenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErgonomicChangeSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
