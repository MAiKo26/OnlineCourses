const express = require("express");
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username && password) {
    if (!isValid(username)) {
      users.push({ username: username, password: password });
      return res
        .status(200)
        .json({ message: "User successfully registred. Now you can login" });
    } else {
      return res.status(404).json({ message: "User already exists!" });
    }
  }
  return res.status(404).json({ message: "Unable to register user." });
});

// Get the book list available in the shop
public_users.get("/", function (req, res) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      res.send(JSON.stringify(books, null, 4));
      resolve();
    }, 1000);
  });

  myPromise.catch((err) => {
    console.error("Error occurred:", err);
    res.status(400).json({ message: "Error" });
  });
});

// Get book details based on ISBN
public_users.get("/isbn/:isbn", function (req, res) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const isbn = req.params.isbn;
      res.send(books[isbn]);

      resolve();
    }, 1000);
  });
  myPromise.catch((err) => {
    console.error("Error occurred:", err);
    res.status(400).json({ message: "Error" });
  });
});

// Get book details based on author
public_users.get("/author/:author", function (req, res) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const author = req.params.author;
      for (const key in books) {
        if (books[key].author === author) {
          res.send(books[key]);
        }
      }

      resolve();
    }, 1000);
  });
  myPromise.catch((err) => {
    console.error("Error occurred:", err);
    res.status(400).json({ message: "Error" });
  });
});

// Get all books based on title
public_users.get("/title/:title", function (req, res) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const title = req.params.title;
      for (const key in books) {
        if (books[key].title === title) {
          res.send(books[key]);
        }
      }
      resolve();
    }, 1000);
  });
  myPromise.catch((err) => {
    console.error("Error occurred:", err);
    res.status(400).json({ message: "Error" });
  });
});

//  Get book review
public_users.get("/reviews/:isbn", function (req, res) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const isbn = req.params.isbn;

      res.send(books[isbn].reviews);

      resolve();
    }, 1000);
  });
  myPromise.catch((err) => {
    console.error("Error occurred:", err);
    res.status(400).json({ message: "Error" });
  });
});

module.exports.general = public_users;
