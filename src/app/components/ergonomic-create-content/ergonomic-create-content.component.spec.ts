import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgonomicCreateContentComponent } from './ergonomic-create-content.component';

describe('ErgonomicCreateContentComponent', () => {
  let component: ErgonomicCreateContentComponent;
  let fixture: ComponentFixture<ErgonomicCreateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErgonomicCreateContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErgonomicCreateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
