import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITask } from '../model/ITask';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private tasksApiUrl = `${environment.apiBaseURL}/tasks`;

    private headers = { headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`) }

    constructor(private http: HttpClient) { }

    getTasks(): Observable<ITask[]> {
        return this.http.get<ITask[]>(this.tasksApiUrl, this.headers);
    }

    addTask(newTask: ITask): Observable<any> {
        return this.http.post(this.tasksApiUrl, newTask, this.headers);
    }

    editTask(task: ITask): Observable<any> {
        return this.http.put(this.tasksApiUrl, task, this.headers);
    }

    deleteTask(id: number): Observable<any> {
        return this.http.delete(`${this.tasksApiUrl}/${id}`, this.headers);
    }

    getDueDateTime(dueDate: Date, dueTime: string): Date {
        let dueDateTime = `${dueDate.toDateString()} ${dueTime}`;
        return new Date(dueDateTime);
    }
}