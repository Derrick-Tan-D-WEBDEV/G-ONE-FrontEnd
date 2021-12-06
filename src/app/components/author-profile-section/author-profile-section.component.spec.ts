import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorProfileSectionComponent } from './author-profile-section.component';

describe('AuthorProfileSectionComponent', () => {
  let component: AuthorProfileSectionComponent;
  let fixture: ComponentFixture<AuthorProfileSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorProfileSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorProfileSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
