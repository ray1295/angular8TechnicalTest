import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";

import { HttpClient } from "@angular/common/http";
import { Task } from "../../models/task";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getAllTasks(): Observable<Task[]> {
    return this.http.get(API_URL + "/tasks").pipe(
      map((response) => {
        return (response as Task[]) || [];
      }),
      catchError((error) => this.handleError(error))
    );
  }

  public createTask(task: Task): Observable<Task> {
    return this.http.post(API_URL + "/tasks", task).pipe(
      map((response) => {
        return new Task(response);
      }),
      catchError((error) => this.handleError(error))
    );
  }

  public getTaskById(taskId: number): Observable<Task> {
    return this.http.get(API_URL + "/tasks/" + taskId).pipe(
      map((response) => {
        return new Task(response);
      }),
      catchError((error) => this.handleError(error))
    );
  }

  public updateTask(task: Task): Observable<Task> {
    return this.http.put(API_URL + "/tasks/" + task.id, task).pipe(
      map((response) => {
        return new Task(response);
      }),
      catchError((error) => this.handleError(error))
    );
  }

  public deleteTaskById(taskId: number) {
    return this.http.delete(API_URL + "/tasks/" + taskId).pipe(
      map((response) => null),
      catchError((error) => this.handleError(error))
    );
  }

  private handleError(error: Response | any) {
    console.error("ApiService::handleError", error);
    return throwError(error.message || error);
  }
}
