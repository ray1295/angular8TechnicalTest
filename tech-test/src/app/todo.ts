export class Todo {
  id: number;
  label: string = '';
  description: string = '';
  category: string = '';
  done: boolean = false;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
