import { Injectable } from "@angular/core";
import { ITask } from '../model/ITask';

@Injectable({
    providedIn:'root'
})
export class TaskService {

    getTasks(): ITask[] {
        return [
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
    }
}