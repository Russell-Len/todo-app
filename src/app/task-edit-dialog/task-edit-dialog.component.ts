import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { ITask } from '../model/ITask';
import { SnackbarService } from '../services/snackbar.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-edit-dialog',
  templateUrl: './task-edit-dialog.component.html',
  styleUrls: ['./task-edit-dialog.component.css']
})
export class TaskEditDialogComponent {
  public dueTime;

  public isProcessing: boolean;

  public categories: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<TaskEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public taskToEdit: ITask,
    private taskService: TaskService,
    public snackbarService: SnackbarService,
  ) {
    this.dueTime = moment(this.taskToEdit.dueDate).format('HH:mm');

    this.isProcessing = false;

    this.fetchCategories();
  }

  private fetchCategories(): void {
    this.taskService.getCategories().subscribe({
      next: (result: string[]) => {
        this.categories = result;
      }
    })
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onProceedClick(): void {
    this.taskToEdit.dueDate = this.taskService.getDueDateTime(this.taskToEdit.dueDate, this.dueTime);

    this.isProcessing = true;

    this.taskService
      .editTask(this.taskToEdit)
      .subscribe({
        next: () => {
          this.snackbarService.openSnackBar("Task updated successfully!");

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
