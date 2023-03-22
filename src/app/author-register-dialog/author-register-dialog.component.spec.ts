import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorRegisterDialogComponent } from './author-register-dialog.component';

describe('AuthorRegisterDialogComponent', () => {
  let component: AuthorRegisterDialogComponent;
  let fixture: ComponentFixture<AuthorRegisterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorRegisterDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorRegisterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
