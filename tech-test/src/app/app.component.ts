import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { Todo } from "./todo";
import { TodoDataService } from "./todo-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [],
})
export class AppComponent implements OnInit{
  title = "tech-test";
  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataService) {}

  public ngOnInit() {
    this.todoDataService
      .getAllTodos()
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }

    // Add new method to handle event emitted by TodoListHeaderComponent
  onAddTodo(todo: Todo): void {
    // this.todoDataService.addTodo(todo);
    this.todoDataService
    .addTodo(todo)
    .subscribe(
      (newTodo) => {
        this.todos = this.todos.concat(newTodo);
      }
    );
  }

  // rename from toggleTodoComplete
  onToggleTodoComplete(todo: Todo): void {
    // this.todoDataService.toggleTodoComplete(todo);
    this.todoDataService
    .toggleTodoComplete(todo)
    .subscribe(
      (updatedTodo) => {
        todo = updatedTodo;
      }
    );
  }

  // rename from removeTodo
  onRemoveTodo(todo: Todo): void {
    // this.todoDataService.deleteTodoById(todo.id);
    this.todoDataService
    .deleteTodoById(todo.id)
    .subscribe(
      (_) => {
        this.todos = this.todos.filter((t) => t.id !== todo.id);
      }
    );
  }

  // get todos(): Observable<Todo[]> {
  //   return this.todoDataService.getAllTodos();
  // }
}
