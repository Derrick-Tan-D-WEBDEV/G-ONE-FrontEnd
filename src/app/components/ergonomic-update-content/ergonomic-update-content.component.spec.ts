import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgonomicUpdateContentComponent } from './ergonomic-update-content.component';

describe('ErgonomicUpdateContentComponent', () => {
  let component: ErgonomicUpdateContentComponent;
  let fixture: ComponentFixture<ErgonomicUpdateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErgonomicUpdateContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErgonomicUpdateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
