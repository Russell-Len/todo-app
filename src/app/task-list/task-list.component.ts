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

    this.taskService
      .getTasks()
      .subscribe(
        (result: ITask[]) =>
          this.tasks = result
      );
  }

  openAddDialog(): void {
    this.dialog.open(TaskAddDialogComponent);
  }

  openEditDialog(task: ITask): void {
    const taskToEdit: ITask = {
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      category: task.category
    }

    this.dialog.open(TaskEditDialogComponent, { data: taskToEdit });
  }

  openDeleteDialog(id: number): void {
    this.dialog.open(TaskDeleteDialogComponent, { data: id, });
  }

}
