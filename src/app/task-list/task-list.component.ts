import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITask } from '../model/ITask';
import { SnackbarService } from '../services/snackbar.service';
import { TaskService } from '../services/task.service';
import { TaskAddDialogComponent } from '../task-add-dialog/task-add-dialog.component';
import { TaskDeleteDialogComponent } from '../task-delete-dialog/task-delete-dialog.component';
import { TaskEditDialogComponent } from '../task-edit-dialog/task-edit-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {

  constructor(public dialog: MatDialog, private taskService: TaskService, private snackbarService: SnackbarService) { }

  public tasks: ITask[] = [];

  ngOnInit(): void {
    this.fetchTasksList();
  }

  fetchTasksList(): void {
    this.taskService
      .getTasks()
      .subscribe({
        next: (result: ITask[]) => {
          this.tasks = result.map(task => {
            task.dueDate = new Date(task.dueDate)
            return task;
          });
        },
        error: (err) => {
          let message: string = '';

          switch (err.status) {
            case 401:
              message = 'Unable to fetch tasks. Please ensure your credentials are valid.';
              break;
            case 400:
              message = 'Unable to fetch tasks. A bad request was made.';
              break;
            case 500:
              message = 'An error occured on our end. Please try again later.';
              break;
            case 0:
              message = 'Unable to fetch tasks. Error communicating with server. Please check your internet connection.';
              break;
            default:
              message = 'An unknown error occured';
          }

          this.snackbarService.openSnackBar(message);
        }
      });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(TaskAddDialogComponent);

    dialogRef.afterClosed().subscribe(() =>
      this.fetchTasksList()
    );
  }

  openEditDialog(task: ITask): void {
    const taskToEdit: ITask = {
      id: task.id,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      category: task.category
    }

    const dialogRef = this.dialog.open(TaskEditDialogComponent, { data: taskToEdit });

    dialogRef.afterClosed().subscribe(() =>
      this.fetchTasksList()
    );
  }

  openDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(TaskDeleteDialogComponent, { data: id, });

    dialogRef.afterClosed().subscribe(() =>
      this.fetchTasksList()
    );
  }

}
