const API_URL = '/api/tasks';

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const statusMessage = document.getElementById('status-message');

document.addEventListener('DOMContentLoaded', fetchTasks);

taskForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    if (!res.ok) throw new Error('Gagal menambahkan tugas');

    taskInput.value = '';
    await fetchTasks();
  } catch (err) {
    showError(err.message);
  }
});

async function fetchTasks() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Gagal mengambil data dari backend Netlify Functions');

    const tasks = await res.json();
    renderTasks(tasks);
  } catch (err) {
    showError(err.message);
    taskList.innerHTML = `<li class="task-item error">Gagal terhubung ke backend.</li>`;
  }
}

function renderTasks(tasks) {
  if (tasks.length === 0) {
    taskList.innerHTML = `<li class="task-item">Belum ada tugas. Tambahkan sekarang!</li>`;
    return;
  }

  taskList.innerHTML = tasks.map(task => `
    <li class="task-item">
      <span>${escapeHtml(task.text)}</span>
      <button class="btn-delete" onclick="deleteTask('${task.id}')">Hapus</button>
    </li>
  `).join('');
}

async function deleteTask(id) {
  try {
    const res = await fetch(`${API_URL}?id=${id}`, {
      method: 'DELETE'
    });

    if (!res.ok) throw new Error('Gagal menghapus tugas');
    await fetchTasks();
  } catch (err) {
    showError(err.message);
  }
}

function showError(msg) {
  statusMessage.textContent = msg;
  statusMessage.className = 'message error';
  setTimeout(() => {
    statusMessage.className = 'message hidden';
  }, 4000);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.innerText = text;
  return div.innerHTML;
}
