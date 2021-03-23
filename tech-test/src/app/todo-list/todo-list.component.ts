import { Component, EventEmitter, Input, Output , OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleTodoComplete(todo: Todo): void {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo): void {
    this.remove.emit(todo);
  }
}
