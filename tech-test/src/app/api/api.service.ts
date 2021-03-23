import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

import { HttpClient, HttpResponse } from "@angular/common/http";
import { Todo } from "../todo";
import { Observable, throwError } from "rxjs";
import { map, filter, scan, catchError } from "rxjs/operators";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // API: GET /todos
  public getAllTodos(): Observable<Todo[]> {
    // will use this.http.get()
    return this.http.get(API_URL + "/tasks").pipe(
      map((response) => {
        return (response as Todo[]) || [];
      }),
      catchError((error) => this.handleError(error))
    );

    // return this.http
    // .get(API_URL + '/todos')
    // .pipe()
    // .map(response => {
    //   const todos = response.json();
    //   return todos.map((todo) => new Todo(todo));
    // })
    // .catch(this.handleError);
  }

  // API: POST /todos
  public createTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post(API_URL + '/tasks', todo)
      .pipe(
        map(response => {
          return new Todo(response);
        }),
        catchError((error) => this.handleError(error))
        );

    // will use this.http.post()
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number): Observable<Todo> {
    // will use this.http.get()
    return this.http
    .get(API_URL + '/tasks/' + todoId).pipe(
      map(response => {
        return new Todo(response);
      }),
      catchError((error) => this.handleError(error))
    );


    // return this.http
    // .get(API_URL + '/todos/' + todoId)
    // .map(response => {
    //   return new Todo(response.json());
    // })
    // .catch(this.handleError);
  }

  // API: PUT /todos/:id
  public updateTodo(todo: Todo): Observable<Todo> {
    // will use this.http.put()
    return this.http
    .put(API_URL + '/tasks/' + todo.id, todo).pipe(
      map(response => {
        return new Todo(response);
      }),
      catchError((error) => this.handleError(error))
    );
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number) {
    // will use this.http.delete()
    return this.http
    .delete(API_URL + '/tasks/' + todoId).pipe(
      map(response => null),
      catchError((error) => this.handleError(error))
    );
  }

  private handleError(error: Response | any) {
    console.error("ApiService::handleError", error);
    return throwError(error.message || error);
  }
}
