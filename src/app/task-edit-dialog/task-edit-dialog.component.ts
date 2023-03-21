import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { ITask } from '../model/ITask';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-edit-dialog',
  templateUrl: './task-edit-dialog.component.html',
  styleUrls: ['./task-edit-dialog.component.css']
})
export class TaskEditDialogComponent {
  public dueTime

  constructor(
    public dialogRef: MatDialogRef<TaskEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public task: ITask,
    private taskService: TaskService
  ) {
    this.dueTime = moment(this.task.dueDate).format('HH:mm')
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onProceedClick(): void {

    let dueDateTime = `${this.task.dueDate.toDateString()} ${this.dueTime}`;

    this.task.dueDate = new Date(dueDateTime);

    this.taskService
      .editTask(this.task)
      .subscribe();

    this.dialogRef.close();
  }

}
