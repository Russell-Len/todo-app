import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITask } from '../model/ITask';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-edit-dialog',
  templateUrl: './task-edit-dialog.component.html',
  styleUrls: ['./task-edit-dialog.component.css']
})
export class TaskEditDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TaskEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public task: ITask,
    private taskService: TaskService
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onProceedClick(): void {
    this.taskService
      .editTask(this.task)
      .subscribe();

    this.dialogRef.close();
  }

}
