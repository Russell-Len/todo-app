import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { TaskAddDialogComponent } from './task-add-dialog/task-add-dialog.component';
import { TaskEditDialogComponent } from './task-edit-dialog/task-edit-dialog.component';
import { TaskDeleteDialogComponent } from './task-delete-dialog/task-delete-dialog.component';
import { TaskListComponent } from './task-list/task-list.component';

//Angular Material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TaskAddDialogComponent,
    TaskEditDialogComponent,
    TaskDeleteDialogComponent,
    TaskListComponent,
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
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    FormsModule,
    MatDatepickerModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
