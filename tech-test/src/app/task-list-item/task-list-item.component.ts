import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "../core/models/task";

@Component({
  selector: "app-task-list-item",
  templateUrl: "./task-list-item.component.html",
})
export class TaskListItemComponent {
  @Input() task: Task;
  @Output() remove: EventEmitter<Task> = new EventEmitter();
  @Output() toggleComplete: EventEmitter<Task> = new EventEmitter();
  @Output() save: EventEmitter<string> = new EventEmitter();
  edit = false;

  constructor() {}

  toggleTaskComplete(task: Task): void {
    this.toggleComplete.emit(task);
  }

  saveTask(task: Task): void {
    this.save.emit('check');
    this.edit = false;
  }

  onEdit(): void {
    this.edit = true;
  }

  removeTask(task: Task): void {
    this.remove.emit(task);
  }
}
