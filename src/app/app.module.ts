import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { TaskAddDialogComponent } from './task-add-dialog/task-add-dialog.component';
import { TaskEditDialogComponent } from './task-edit-dialog/task-edit-dialog.component';
import { TaskDeleteDialogComponent } from './task-delete-dialog/task-delete-dialog.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AuthorLoginDialogComponent } from './author-login-dialog/author-login-dialog.component';
import { AuthorRegisterDialogComponent } from './author-register-dialog/author-register-dialog.component';
import { AuthorLogoutDialogComponent } from './author-logout-dialog/author-logout-dialog.component';

//Angular Material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//3rd-Party Components
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TaskAddDialogComponent,
    TaskEditDialogComponent,
    TaskDeleteDialogComponent,
    TaskListComponent,
    AuthorLoginDialogComponent,
    AuthorRegisterDialogComponent,
    AuthorLogoutDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    NgxMatTimepickerModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-MY' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
