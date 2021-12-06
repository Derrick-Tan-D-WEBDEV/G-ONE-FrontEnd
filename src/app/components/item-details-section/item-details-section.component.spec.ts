import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsSectionComponent } from './item-details-section.component';

describe('ItemDetailsSectionComponent', () => {
  let component: ItemDetailsSectionComponent;
  let fixture: ComponentFixture<ItemDetailsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
