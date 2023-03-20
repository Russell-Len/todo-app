import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-delete-dialog',
  templateUrl: './task-delete-dialog.component.html',
  styleUrls: ['./task-delete-dialog.component.css']
})
export class TaskDeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TaskDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number,
    private taskService: TaskService
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onProceedClick(): void {
    this.taskService
      .deleteTask(this.id)
      .subscribe();

    this.dialogRef.close();
  }
}
