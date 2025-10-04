import { Gerenciador } from "./gerenciador.js";
import { renderUsers, renderTasks } from "./ui.js";

const manager = new Gerenciador();
renderUsers(manager);
renderTasks(manager);

// Adicionar usuário
document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("userName").value;
  const email = document.getElementById("userEmail").value;
  manager.addUser(name, email);
  renderUsers(manager);
  document.getElementById("userForm").reset();
});

// Adicionar tarefa
document.getElementById("taskForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("taskTitle").value;
  const userId = document.getElementById("taskUser").value;
  const priority = document.getElementById("taskPriority").value;
  const desc = document.getElementById("taskDesc").value;
  manager.addTask(title, userId, priority, desc);
  renderTasks(manager);
  document.getElementById("taskForm").reset();
});
