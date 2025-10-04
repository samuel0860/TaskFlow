// js/ui.js

export function renderUsers(manager) {
  const list = document.getElementById("usersList");
  const select = document.getElementById("taskUser");
  list.innerHTML = "";
  select.innerHTML = '<option value="">Atribuir a...</option>';

  manager.users.forEach((u) => {
    const div = document.createElement("div");
    div.className = "user-item";
    div.innerHTML = `
            <span>${u.name} (${u.email})</span>
            <button class="btn delete-user" data-id="${u.id}">Excluir</button>
        `;
    list.appendChild(div);

    const opt = document.createElement("option");
    opt.value = u.id;
    opt.textContent = u.name;
    select.appendChild(opt);
  });

  // Evento para excluir usuário e suas tarefas
  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".delete-user");
    if (btn) {
      const id = Number(btn.dataset.id); // converte para número
      if (confirm("Excluir usuário? Isso também removerá suas tarefas.")) {
        manager.users = manager.users.filter((user) => user.id !== id);
        manager.tasks = manager.tasks.filter((task) => task.userId !== id);

        manager.save();
        renderUsers(manager);
        renderTasks(manager);
      }
    }
  });
}

export function renderTasks(manager) {
  const container = document.getElementById("tasksContainer");
  container.innerHTML = "";

  manager.tasks.forEach((t) => {
    const div = document.createElement("div");
    div.className = "task" + (t.done ? " done" : "");
    div.innerHTML = `
            <span>${t.title} - Prioridade: ${t.priority}</span>
            <button class="btn delete-task" data-id="${t.id}">Excluir</button>
        `;
    container.appendChild(div);
  });

  // Evento para excluir tarefas
  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".delete-task");
    if (btn) {
      const id = Number(btn.dataset.id); // converte para número
      if (confirm("Excluir tarefa?")) {
        manager.tasks = manager.tasks.filter((task) => task.id !== id);
        manager.save();
        renderTasks(manager);
      }
    }
  });
}
