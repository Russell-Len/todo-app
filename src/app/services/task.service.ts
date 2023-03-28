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

    getCategories(): Observable<string[]> {
        return this.http.get<string[]>(`${this.tasksApiUrl}/categories`, this.authService.headers);
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

    getTaskAPIErrorResponse(err: any): string {
        let message: string = '';

        switch (err.status) {
            case 400:
            case 401:
            case 404:
                message = err.error;
                break;
            case 500:
                message = 'An error occured on our end. Please try again later.';
                break;
            case 0:
                message = 'Error communicating with server. Please check your internet connection.';
                break;
            default:
                message = 'An unknown error occured.';
        }

        return message;
    }

}