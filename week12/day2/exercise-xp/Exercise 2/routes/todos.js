const express = require("express");
const { todo } = require("node:test");
const router = express.Router();

const todos = [];

// Get all to-do items

router.get("/todos", (req, res) => {
  res.send(todos);
});

// Add a new to-do item

router.post("/todos", (req, res) => {
  const newId = todos.length + 1;
  const newTodo = {
    id: newId,
    name: req.body.name,
    deadline: req.body.deadline,
  };

  todos.push(newTodo);

  res.status(201).send("New to-do created");
});

// Update a to-do item by ID

router.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex((v) => v.id === id);

  if (index === -1) {
    res.status(404).send("Not found");
  }

  todos[index] = {
    id: id,
    name: req.body.name,
    deadline: req.body.deadline,
  };

  res.status(200).send("To-do updated");
});

// Delete a to-do item by ID

router.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex((v) => v.id === id);

  if (index === -1) {
    res.status(404).send("Not found");
  }

  todos.splice(index, 1);

  let i = 1;
  todos.forEach((v) => {
    v.id = i;
    i++;
  });

  res.status(200).send("Deleted to-do");
});

module.exports = router;
