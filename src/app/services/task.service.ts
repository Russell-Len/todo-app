import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITask } from '../model/ITask';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private tasksApiUrl = 'https://localhost:7016/api/tasks';

    constructor(private http: HttpClient) { }

    getTasks(): Observable<ITask[]> {
        return this.http.get<ITask[]>(this.tasksApiUrl);
    }

    addTask(newTask: ITask): Observable<any> {
        return this.http.post(this.tasksApiUrl, newTask);
    }

    editTask(task: ITask): Observable<any> {
        return this.http.put(this.tasksApiUrl, task);
    }

    deleteTask(id: number): Observable<any> {
        return this.http.delete(`${this.tasksApiUrl}/${id}`);
    }

    getDueDateTime(dueDate: Date, dueTime: string): Date {
        let dueDateTime = `${dueDate.toDateString()} ${dueTime}`;
        return new Date(dueDateTime);
    }
}