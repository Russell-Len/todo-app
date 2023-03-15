import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from '../model/Task';

@Component({
  selector: 'app-task-add-dialog',
  templateUrl: './task-add-dialog.component.html',
  styleUrls: ['./task-add-dialog.component.css']
})
export class TaskAddDialogComponent {

  public newTask: Task = {
    title: '',
    description: '',
    dueDate: new Date(),
    category: '',
  }

  constructor(
    public dialogRef: MatDialogRef<TaskAddDialogComponent>,
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    console.log(this.newTask)
  }
}
