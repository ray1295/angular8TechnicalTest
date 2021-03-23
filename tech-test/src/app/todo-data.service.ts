import { Injectable } from '@angular/core';
import {Todo} from './todo';
import { ApiService } from './api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId = 0;
    // Placeholder for todos
  todos: Todo[] = [];

  constructor(
    private api: ApiService
  ) { }

    // Simulate POST /todos
    addTodo(todo: Todo): Observable<Todo> {
      // if (!todo.id) {
      //   todo.id = ++this.lastId;
      // }
      // this.todos.push(todo);
      // return this;
      return this.api.createTodo(todo);

    }

    // Simulate DELETE /todos/:id
    deleteTodoById(id: number): Observable<Todo> {
      // this.todos = this.todos
      //   .filter(todo => todo.id !== id);
      // return this;
      return this.api.deleteTodoById(id);
    }

    // Simulate PUT /todos/:id
    updateTodoById(todo: Todo): Observable<Todo> {
      // const todo = this.getTodoById(id);
      // if (!todo) {
      //   return null;
      // }
      // Object.assign(todo, values);
      // return todo;
      return this.api.updateTodo(todo);
    }

    // Simulate GET /todos
    getAllTodos(): Observable<Todo[]> {
      return this.api.getAllTodos();
    }

    // Simulate GET /todos/:id
    getTodoById(id: number): Observable<Todo> {
      // return this.todos
      //   .filter(todo => todo.id === id)
      //   .pop();
      return this.api.getTodoById(id);
    }

    // Toggle todo complete
    toggleTodoComplete(todo: Todo){
      // const updatedTodo = this.updateTodoById(todo.id, {
      //   complete: !todo.complete
      // });
      // return updatedTodo;
      todo.done = !todo.done;
      return this.api.updateTodo(todo);
    }
}
