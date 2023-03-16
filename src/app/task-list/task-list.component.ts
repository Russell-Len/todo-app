import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../model/Task';
import { TaskAddDialogComponent } from '../task-add-dialog/task-add-dialog.component';
import { TaskDeleteDialogComponent } from '../task-delete-dialog/task-delete-dialog.component';
import { TaskEditDialogComponent } from '../task-edit-dialog/task-edit-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  constructor(public dialog: MatDialog) { }

  tasks: Task[] = [
    {
      id: 0,
      title: 'Example Title 0',
      description: 'Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description',
      dueDate: new Date(),
      category: 'foo',
      isDeleted: false,
      created: new Date(),
      updated: new Date(),
    },
    {
      id: 1,
      title: 'Example Title 1',
      description: 'Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description',
      dueDate: new Date(),
      category: 'foo',
      isDeleted: false,
      created: new Date(),
      updated: new Date(),
    },
    {
      id: 2,
      title: 'Example Title 2',
      description: 'Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description Example Description',
      dueDate: new Date(),
      category: 'foo',
      isDeleted: false,
      created: new Date(),
      updated: new Date(),
    },
  ]

  openAddDialog(): void {
    this.dialog.open(TaskAddDialogComponent);
  }

  openEditDialog(task: Task): void {
    const taskToEdit: Task = {
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
