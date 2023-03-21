import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITask } from '../model/ITask';

import { APIPaths } from "../enums/enums";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private tasksApiUrl = `${environment.apiBaseURL}/${APIPaths.Tasks}`;

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