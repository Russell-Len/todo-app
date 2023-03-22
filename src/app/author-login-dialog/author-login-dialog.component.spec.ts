import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorLoginDialogComponent } from './author-login-dialog.component';

describe('AuthorLoginDialogComponent', () => {
  let component: AuthorLoginDialogComponent;
  let fixture: ComponentFixture<AuthorLoginDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorLoginDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorLoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
