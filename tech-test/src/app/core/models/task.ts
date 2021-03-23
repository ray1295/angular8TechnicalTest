export class Task {
  id: number;
  label = '';
  description = '';
  category = '';
  done = false;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
