const express = require('express');
    morgan = require("morgan");
const app = express();

let topMovies = [
    {
      title: "Harry Potter and the Chamber of Secrets",
      director: "Chris Columbus",
    },
    {
      title: "Scream",
      director: "Wes Craven",
    },
    {
      title: "Ready Player One",
      director: "Steven Spielberg",
    },
    {
      title: "Krampus",
      director: "Michael Dougherty",
    },
    {
      title: "Halloween",
      director: "John Carpenter",
    },
    {
      title: "Jaws",
      director: "Steven Spielberg",
    },
    {
      title: "I Love You, Man",
      director: "John Hamburg",
    },
    {
      title: "IT",
      director: "Andy Muschietti",
    },
    {
      title: "Ghostbusters",
      director: "Ivan Reitman",
    },
    {
      title: "Back to the Future",
      director: "Robert Zemeckis",
    },
  ];
  
  app.use(express.static("public"));
  app.use(morgan("common"));
  
  // GET requests
  app.get("/", (req, res) => {
    res.send("Welcome to MyFlix!");
  });
  
  app.get("/documentation", (req, res) => {
    res.sendFile("public/documentation.html", { root: __dirname });
  });
  
  app.get("/movies", (req, res) => {
    res.json(topMovies);
  });
  
  // Error
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong. Please try again later.");
  });
  
  // listen for requests
  app.listen(8080, () => {
    console.log("Your app is listening on port 8080.");
  });