import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../model/Task';
import { TaskAddDialogComponent } from '../task-add-dialog/task-add-dialog.component';
import { TaskDeleteDialogComponent } from '../task-delete-dialog/task-delete-dialog.component';
import { TaskEditDialogComponent } from '../task-edit-dialog/task-edit-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  constructor(public dialog: MatDialog) { }

  tasks: Task[] = [
    {
      id: 0,
      title: 'Example Title 0',
      description: 'Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description',
      dueDate: new Date(),
      category: 'foo',
      isDeleted: false,
      created: new Date(),
      updated: new Date(),
    },
    {
      id: 1,
      title: 'Example Title 1',
      description: 'Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description',
      dueDate: new Date(),
      category: 'foo',
      isDeleted: false,
      created: new Date(),
      updated: new Date(),
    },
    {
      id: 2,
      title: 'Example Title 2',
      description: 'Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description',
      dueDate: new Date(),
      category: 'foo',
      isDeleted: false,
      created: new Date(),
      updated: new Date(),
    },
  ]

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

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(TaskDeleteDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
