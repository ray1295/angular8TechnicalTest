import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const task = new Task({
      label: 'hello',
      done: true,
      id: 1,
      description: 'world',
      category: '',
    });
    expect(task.label).toEqual('hello');
    expect(task.done).toEqual(true);
    expect(task.id).toEqual(1);
    expect(task.description).toEqual('world');
    expect(task.category).toEqual('');
  });
});
