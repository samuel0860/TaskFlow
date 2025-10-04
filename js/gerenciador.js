import { Usuario } from "./usuario.js";
import { Tarefa } from "./tarefa.js";

export class Gerenciador {
  constructor() {
    this.users = [];
    this.tasks = [];
    this.load();
  }

  addUser(name, email) {
    const u = new Usuario(Date.now(), name, email);
    this.users.push(u);
    this.save();
    return u;
  }

  addTask(title, userId, priority, desc) {
    const t = new Tarefa(Date.now(), title, userId, priority, desc);
    this.tasks.push(t);
    this.save();
    return t;
  }

  toggleTaskDone(taskId) {
    const t = this.tasks.find((t) => t.id === taskId);
    if (t) {
      t.done = !t.done;
      this.save();
    }
  }

  save() {
    localStorage.setItem(
      "teamtrack",
      JSON.stringify({ users: this.users, tasks: this.tasks })
    );
  }

  load() {
    const raw = localStorage.getItem("teamtrack");
    if (raw) {
      const obj = JSON.parse(raw);
      this.users = obj.users || [];
      this.tasks = obj.tasks || [];
    }
  }
}
