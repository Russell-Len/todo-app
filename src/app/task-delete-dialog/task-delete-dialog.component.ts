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
          let message: string = '';

          switch (err.status) {
            case 401:
              message = 'Delete task failed. Please ensure your credentials are valid.';
              break;
            case 404:
              message = 'Delete task failed. The requested task was not found.';
              break;
            case 400:
              message = 'Delete task failed. A bad request was made.';
              break;
            case 500:
              message = 'An error occured on our end. Please try again later.';
              break;
            case 0:
              message = 'Error communicating with server. Please check your internet connection.';
              break;
            default:
              message = 'An unknown error occured';
          }

          this.isProcessing = false;

          this.snackbarService.openSnackBar(message);
        }
      });
  }
}
