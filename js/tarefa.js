export class Tarefa {
  constructor(id, title, userId, priority, desc) {
    this.id = id;
    this.title = title;
    this.userId = userId;
    this.priority = priority;
    this.desc = desc;
    this.done = false;
  }
}
