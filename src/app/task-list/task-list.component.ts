import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITask } from '../model/ITask';
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

  constructor(public dialog: MatDialog, private taskService: TaskService) { }

  public tasks: ITask[] = [];

  ngOnInit(): void {
    this.fetchTasksList();
  }

  fetchTasksList(): void {
    this.taskService
      .getTasks()
      .subscribe((result: ITask[]) => this.tasks = result);
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
    this.dialog.open(TaskDeleteDialogComponent, { data: id, });
  }

}
