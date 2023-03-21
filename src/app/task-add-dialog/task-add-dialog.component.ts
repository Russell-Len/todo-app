import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ITask } from '../model/ITask';
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

  constructor(
    public dialogRef: MatDialogRef<TaskAddDialogComponent>,
    private taskService: TaskService
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onProceedClick(): void {
    this.newTask.dueDate = this.taskService.getDueDateTime(this.newTask.dueDate, this.dueTime);

    this.taskService
      .addTask(this.newTask)
      .subscribe();

    this.dialogRef.close();
  }
}
