import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../services/snackbar.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-delete-dialog',
  templateUrl: './task-delete-dialog.component.html',
  styleUrls: ['./task-delete-dialog.component.css']
})
export class TaskDeleteDialogComponent {

  public isProcessing: boolean;

  constructor(
    public dialogRef: MatDialogRef<TaskDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number,
    private taskService: TaskService,
    public snackbarService: SnackbarService,
  ) {
    this.isProcessing = false;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onProceedClick(): void {
    this.isProcessing = true;

    this.taskService
      .deleteTask(this.id)
      .subscribe({
        next: () => {
          this.snackbarService.openSnackBar("Task deleted successfully!");

          this.isProcessing = false;

          this.dialogRef.close();
        },
        error: (err) => {
          let message: string = this.taskService.getTaskAPIErrorResponse(err);
         
          this.isProcessing = false;

          this.snackbarService.openSnackBar(message);
        }
      });
  }
}
