const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://mongo:27017/todos', { useNewUrlParser: true });

const Todo = mongoose.model('Todo', { text: String, done: Boolean });

app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post('/todos', async (req, res) => {
  const todo = new Todo({ text: req.body.text, done: false });
  await todo.save();
  res.json(todo);
});

app.listen(3000, () => console.log('Server running on port 3000'));