import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { TaskAddDialogComponent } from './task-add-dialog/task-add-dialog.component';
import { TaskEditDialogComponent } from './task-edit-dialog/task-edit-dialog.component';
import { TaskDeleteDialogComponent } from './task-delete-dialog/task-delete-dialog.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TaskAddDialogComponent,
    TaskEditDialogComponent,
    TaskDeleteDialogComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
