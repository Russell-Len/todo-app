import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorLogoutDialogComponent } from './author-logout-dialog.component';

describe('AuthorLogoutDialogComponent', () => {
  let component: AuthorLogoutDialogComponent;
  let fixture: ComponentFixture<AuthorLogoutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorLogoutDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorLogoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
