import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../core/models/task';

@Component({
  selector: 'app-task-list-header',
  templateUrl: './task-list-header.component.html',
})
export class TaskListHeaderComponent {
  @Output() add: EventEmitter<Task> = new EventEmitter();
  newTask: Task = new Task();

  constructor() { }

  addTask(): void {
    this.add.emit(this.newTask);
    this.newTask = new Task();
  }

}
