import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../core/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  @Input() tasks: Task[];
  @Output() remove: EventEmitter<Task> = new EventEmitter();
  @Output() save: EventEmitter<Task> = new EventEmitter();
  @Output() toggleComplete: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  onToggleTaskComplete(task: Task): void {
    this.toggleComplete.emit(task);
  }

  onRemoveTask(task: Task): void {
    this.remove.emit(task);
  }

  onSaveTask(task: Task): void {
    this.save.emit(task);
  }
}
