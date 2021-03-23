import { Injectable } from "@angular/core";
import { Task } from "../../models/task";
import { ApiService } from "../api/api.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TaskDataService {
  tasks: Task[] = [];

  constructor(private api: ApiService) {}

  addTask(task: Task): Observable<Task> {
    return this.api.createTask(task);
  }

  deleteTaskById(id: number): Observable<Task> {
    return this.api.deleteTaskById(id);
  }

  updateTaskById(task: Task): Observable<Task> {
    console.log('reaches')
    return this.api.updateTask(task);
  }

  getAllTasks(): Observable<Task[]> {
    return this.api.getAllTasks();
  }

  getTaskById(id: number): Observable<Task> {
    return this.api.getTaskById(id);
  }

  toggleTaskComplete(task: Task) {
    task.done = !task.done;
    return this.api.updateTask(task);
  }
}
