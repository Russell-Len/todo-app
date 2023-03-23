import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITask } from '../model/ITask';
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private tasksApiUrl = `${environment.apiBaseURL}/tasks`;

    constructor(private http: HttpClient, private authService: AuthService) { }

    getTasks(): Observable<ITask[]> {
        return this.http.get<ITask[]>(this.tasksApiUrl, this.authService.headers);
    }

    addTask(newTask: ITask): Observable<any> {
        return this.http.post(this.tasksApiUrl, newTask, this.authService.headers);
    }

    editTask(task: ITask): Observable<any> {
        return this.http.put(this.tasksApiUrl, task, this.authService.headers);
    }

    deleteTask(id: number): Observable<any> {
        return this.http.delete(`${this.tasksApiUrl}/${id}`, this.authService.headers);
    }

    getDueDateTime(dueDate: Date, dueTime: string): Date {
        let dueDateTime = `${dueDate.toDateString()} ${dueTime}`;
        return new Date(dueDateTime);
    }
}