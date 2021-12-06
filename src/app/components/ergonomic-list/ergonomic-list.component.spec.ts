import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgonomicListComponent } from './ergonomic-list.component';

describe('ErgonomicListComponent', () => {
  let component: ErgonomicListComponent;
  let fixture: ComponentFixture<ErgonomicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErgonomicListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErgonomicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
