import { Component, OnInit } from "@angular/core";
import { Task } from "./core/models/task";
import { TaskDataService } from "./core/services/task/task-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskDataService: TaskDataService) {}

  public ngOnInit(): void {
    this.taskDataService.getAllTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  onAddTask(task: Task): void {
    this.taskDataService.addTask(task).subscribe((newTask) => {
      this.tasks = this.tasks.concat(newTask);
    });
  }

  onSaveTask(task: Task): void {
    this.taskDataService.updateTaskById(task).subscribe((updatedTask) => {
      task = updatedTask;
    });
  }

  onToggleTaskComplete(task: Task): void {
    this.taskDataService.toggleTaskComplete(task).subscribe((updatedTask) => {
      task = updatedTask;
    });
  }

  onRemoveTask(task: Task): void {
    this.taskDataService.deleteTaskById(task.id).subscribe((_) => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }
}
