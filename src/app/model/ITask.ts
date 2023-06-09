export interface ITask {
    id?: number,
    title: string,
    description: string,
    dueDate: Date,
    category: string,
    isDeleted?: boolean,
    created?: Date,
    updated?: Date
}