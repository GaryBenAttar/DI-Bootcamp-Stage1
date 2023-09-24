const express = require("express");
const app = express();
const port = 3000;

const data = [
  {
    id: 1,
    title: "My article",
    content: "",
  },
  {
    id: 2,
    title: "My article",
    content: "",
  },
  {
    id: 3,
    title: "My article",
    content: "",
  },
  {
    id: 4,
    title: "My article",
    content: "",
  },
  {
    id: 5,
    title: "My article",
    content: "",
  },
];

app.use(express.json());

app.get("/posts", (req, res) => res.json(data));

app.get(`/posts/:id`, (req, res) => {
  const id = Number(req.params.id);
  const post = data.find((v) => id === v.id);
  res.json(post);
});

app.post("/posts", (req, res) => {
  const newPost = {
    id: products.length + 1,
    title: req.body.name,
    content: req.body.content,
  };

  data.push(newPost);
  res.status(201).json(newPost);
});

app.put("/posts/:id", (res, req) => {
  const id = Number(req.params.id);
  const index = data.findIndex((v) => v.id === id);

  if (index === -1) {
    return res.status(404).send("Product not found");
  }

  const updatePost = {
    id: data[index].id,
    title: req.body.title,
    content: req.body.content,
  };
});

app.delete("posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = data.findIndex((v) => v.id === id);
  if (index === -1) {
    return res.status(404).send("Post not found");
  }

  data.splice(index, 1);
  res.status(200).json("Post deleted");
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
