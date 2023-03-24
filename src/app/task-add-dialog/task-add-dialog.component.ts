import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ITask } from '../model/ITask';
import { AuthService } from '../services/auth.service';
import { SnackbarService } from '../services/snackbar.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-add-dialog',
  templateUrl: './task-add-dialog.component.html',
  styleUrls: ['./task-add-dialog.component.css']
})
export class TaskAddDialogComponent {

  public newTask: ITask = {
    title: '',
    description: '',
    dueDate: new Date(),
    category: '',
  }

  public dueTime: string = "12:00";

  public isProcessing: boolean;

  constructor(
    public dialogRef: MatDialogRef<TaskAddDialogComponent>,
    private taskService: TaskService,
    public snackbarService: SnackbarService,
    public authService: AuthService
  ) {
    this.isProcessing = false;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onProceedClick(): void {
    this.newTask.dueDate = this.taskService.getDueDateTime(this.newTask.dueDate, this.dueTime);

    this.isProcessing = true;

    this.taskService
      .addTask(this.newTask)
      .subscribe({
        next: () => {
          this.snackbarService.openSnackBar("Task added successfully!");

          this.isProcessing = false;

          this.dialogRef.close();
        },
        error: (err) => {
          let message: string = '';

          switch (err.status) {
            case 401:
              message = 'Add task failed. Please ensure your credentials are valid.';
              break;
            case 400:
              message = 'Add task failed. A bad request was made.';
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
