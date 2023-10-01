const express = require("express");
const { route } = require("../../Exercise 2/routes/todos");
const router = express.Router();

// Sample in-memory database for storing books
const books = [];

// Get all books

router.get("/books", (req, res) => {
  res.status(200).send(books);
});

// Add a new book

router.post("/books", (req, res) => {
  const newId = books.length;
  const newBook = {
    id: newId,
    name: req.body.name,
    author: req.body.author,
    publicationYear: req.body.date,
  };

  books.push(newBook);

  res.status(201).send("New book added to the collection");
});

// Update a book by ID

router.put("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex((v) => v.id === id);

  if (index === -1) {
    res.status(404).send("Not found");
  }

  books[index] = {
    id: id,
    name: req.body.name,
    author: req.body.author,
    publicationYear: req.body.date,
  };

  res.status(200).send("Book Updated");
});

// Delete a book by ID

router.delete("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex((v) => v.id === id);

  if (index === -1) {
    res.status(404).send("Not found");
  }

  books.splice(index, 1);

  let i = 0;
  books.forEach((v) => {
    v.id = i;
    i++;
  });

  res.status(200).send("Book deleted from the collection");
});

module.exports = router;
