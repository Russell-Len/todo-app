import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITask } from '../model/ITask';

@Injectable({
    providedIn:'root'
})
export class TaskService {

    private tasksApiUrl = 'https://localhost:7016/api/tasks'; 

    constructor(private http: HttpClient){}

    getTasks(): Observable<ITask[]> {
       return this.http.get<ITask[]>(`${this.tasksApiUrl}/GetTasks`);
    }
}