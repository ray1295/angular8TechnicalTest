import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss']
})
export class TodoListHeaderComponent implements OnInit {
  @Output()
  add: EventEmitter<Todo> = new EventEmitter();
  newTodo: Todo = new Todo();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(): void {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
