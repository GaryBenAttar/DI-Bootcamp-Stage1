const express = require("express");
const app = express();
const port = 5000;

const books = [
  {
    id: 1,
    title: "Harry Pooter and the chamber of secrets",
    author: "JK Rowling",
    publishedYear: 1998,
  },
  {
    id: 2,
    title: "The 4-Hour Work Week",
    author: "Tim Ferris",
    publishedYear: 2007,
  },
  {
    id: 3,
    title: "The last apprentice",
    author: "Joseph Delaney",
    publishedYear: 2005,
  },
  {
    id: 4,
    title: "Les Miserables",
    author: "Victor Hugo",
    publishedYear: 1862,
  },
  {
    id: 5,
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    author: "Ashlee Vance",
    publishedYear: 2015,
  },
];

app.listen(port, () => console.log(`Listening on port: ${port}...`));
app.use(express(express.json()));

app.get("/api/books", (req, res) => {
  res.send(books);
});

app.get("/api/books/:bookId", (req, res) => {
  const id = Number(req.params.bookId);
  const book = books.find((v) => v.id === id);

  if (!book) {
    res.status(404).send("Book not found");
  }

  res.status(200).send(book);
});

app.post("/api/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});
