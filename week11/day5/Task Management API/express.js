const fs = require("fs");

const tasks = fs.readFileSync(`${__dirname}/tasks.json`, "utf-8");
const tasksObj = JSON.parse(tasks);

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Listening on port: ${port}...`));
app.use(express.json());

app.get("/tasks", (req, res) => {
  console.log(tasksObj);
  res.writeHead(200, { "Content-type": "application/json" });
  res.end(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasksObj.find((v) => v.id === id);

  if (!task) {
    return res.status(404).send("Not found");
  }

  res.json(task);
});

app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasksObj.length + 1,
    name: req.body.name,
    date: req.body.date,
  };

  tasksObj.push(newTask);

  res.status(201).json({
    status: "success",
    data: { task: newTask },
  });
});

app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tasksObj.findIndex((v) => v.id === id);

  if (index === -1) {
    return res.status(404).send("Not found");
  }

  const updatedTask = {
    id: tasksObj[index].id,
    name: req.body.name,
    date: req.body.date,
  };

  tasksObj[index] = updatedTask;
  res.status(200).json("Product Updated");
});

app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tasksObj.findIndex((v) => v.id === id);

  if (index === -1) {
    return res.status(404).send("Not Found");
  }

  tasksObj.splice(index, 1);
  res.status(200).json("Product Deleted");
});
