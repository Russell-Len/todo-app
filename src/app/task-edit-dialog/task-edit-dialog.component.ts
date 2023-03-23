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
    @Inject(MAT_DIALOG_DATA) public taskToEdit: ITask,
    private taskService: TaskService
  ) {
    this.dueTime = moment(this.taskToEdit.dueDate).format('HH:mm')
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onProceedClick(): void {
    this.taskToEdit.dueDate = this.taskService.getDueDateTime(this.taskToEdit.dueDate, this.dueTime);

    this.taskService
      .editTask(this.taskToEdit)
      .subscribe(() => this.dialogRef.close());
  }

}
