import { async, inject, TestBed } from '@angular/core/testing';
import { Task } from '../../models/task';
import { TaskDataService } from './task-data.service';

describe('TaskDataService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [TaskDataService],
    })
  );

  it('should be created', () => {
    const service: TaskDataService = TestBed.get(TaskDataService);
    expect(service).toBeTruthy();
  });

  describe('#getAllTasks()', () => {
    it('should return an empty array by default', inject(
      [TaskDataService],
      (service: TaskDataService) => {
        expect(service.getAllTasks()).toEqual([]);
      }
    ));

    it('should return all tasks', inject(
      [TaskDataService],
      (service: TaskDataService) => {
        const task1 = new Task({ label: 'Hello 1', done: false });
        const task2 = new Task({ label: 'Hello 2', done: true });
        service.addTask(task1);
        service.addTask(task2);
        expect(service.getAllTasks()).toEqual([task1, task2]);
      }
    ));
  });

  describe('#save(task)', () => {
    it('should automatically assign an incrementing id', inject(
      [TaskDataService],
      (service: TaskDataService) => {
        const task1 = new Task({ label: 'Hello 1', done: false });
        const task2 = new Task({ label: 'Hello 2', done: true });
        service.addTask(task1);
        service.addTask(task2);
        expect(service.getTaskById(1)).toEqual(task1);
        expect(service.getTaskById(2)).toEqual(task2);
      }
    ));
  });

  describe('#deleteTaskById(id)', () => {
    it('should remove task with the corresponding id', inject(
      [TaskDataService],
      (service: TaskDataService) => {
        const task1 = new Task({ label: 'Hello 1', done: false });
        const task2 = new Task({ label: 'Hello 2', done: true });
        service.addTask(task1);
        service.addTask(task2);
        expect(service.getAllTasks()).toEqual([task1, task2]);
        service.deleteTaskById(1);
        expect(service.getAllTasks()).toEqual([task2]);
        service.deleteTaskById(2);
        expect(service.getAllTasks()).toEqual([]);
      }
    ));

    it('should not removing anything if task with corresponding id is not found', inject(
      [TaskDataService],
      (service: TaskDataService) => {
        const task1 = new Task({ label: 'Hello 1', done: false });
        const task2 = new Task({ label: 'Hello 2', done: true });
        service.addTask(task1);
        service.addTask(task2);
        expect(service.getAllTasks()).toEqual([task1, task2]);
        service.deleteTaskById(3);
        expect(service.getAllTasks()).toEqual([task1, task2]);
      }
    ));
  });

  describe('#updateTaskById(id, values)', () => {
    it('should return task with the corresponding id and updated data', inject(
      [TaskDataService],
      (service: TaskDataService) => {
        const task = new Task({ label: 'Hello 1', done: false });
        service.addTask(task);
        const updatedTask = service.updateTaskById(new Task({
          id: 1,
          label: 'new label',
        }));
        expect(updatedTask).toEqual({ id: 1, label: 'new label' });
      }
    ));

    it('should return null if task is not found', inject(
      [TaskDataService],
      (service: TaskDataService) => {
        const task = new Task({ label: 'Hello 1', done: false });
        service.addTask(task);
        const updatedTask = service.updateTaskById(new Task({
          id: 2,
          label: 'new label',
        }));
        expect(updatedTask).toEqual(null);
      }
    ));
  });

  describe('#toggleTaskComplete(task)', () => {
    it('should return the updated task with inverse done status', inject(
      [TaskDataService],
      (service: TaskDataService) => {
        const task = new Task({ label: 'Hello 1', done: false });
        service.addTask(task);
        const updatedTask = service.toggleTaskComplete(task);
        expect(updatedTask.toPromise().then(response => response.done)).toEqual(true);
        service.toggleTaskComplete(task);
        expect(updatedTask.toPromise().then(response => response.done)).toEqual(false);
        // expect(updatedTask.done).toEqual(false);
      }
    ));
  });
});
