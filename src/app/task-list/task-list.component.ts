import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskAddDialogComponent } from '../task-add-dialog/task-add-dialog.component';
import { TaskEditDialogComponent } from '../task-edit-dialog/task-edit-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  constructor(public dialog: MatDialog) { }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(TaskAddDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(TaskEditDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
