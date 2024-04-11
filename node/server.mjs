// server.mjs
import express from 'express';
import { createTask } from './routes/tasks/create.mjs';
import { loadTasks } from './routes/tasks/load.mjs';
import { updateTask } from './routes/tasks/update.mjs';

const app = express();
app.use(express.json());

// Página inicial
app.get('/',  (req, res) => {
  res.send('Hello Word');
});

// Lista tarefas
app.get('/tasks', async (req, res) => {
  const tasks = await loadTasks();
  res.json(tasks);
})

// Insere tarefas
app.post("/tasks", async (req, res, next) => {
  await createTask({
    title: req.body.title
  });
  
  res.status(201).end();
});

app.put("/tasks/:taskId/completed", async (req, res) => {
  await updateTask(req.params.taskId);
  
  res.status(201).end();
})


// Executa o servidor
app.listen(3000, () => {
  console.log('Node, com express, em execução na porta 3000');
});