const express = require('express');
    app = express(),
    bodyParser = require('body-parser'),
    uuid = require('uuid');

app.use(bodyParser.json());

let users = [
    {
        id: 1,
        name: "Kim",
        favoriteMovies: [Scream]
    },
    {
        id: 2,
        name: "Joe",
        favoriteMovies: [Ghostbusters]
    },
]

let movies = [
    {
      "Title":"Harry Potter and the Chamber of Secrets",
      "Description":"An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
      "Genre": {
        "Name":"Fantasy",
        "Description":"By definition, fantasy is a genre that typically features the use of magic or other supernatural phenomena in the plot, setting, or theme."
      },
      "Director": {
        "Name":"Chris Columbus",
        "Bio":"Born in Pennsylvania and raised in Ohio, Chris Columbus was first inspired to make movies after seeing The Godfather at age 15. After enrolling at NYU film school, he sold his first screenplay (never produced) while a sophomore there. After graduation Columbus tried to sell his fourth script, Gremlins, with no success, until Steven Spielberg optioned it; Columbus moved to Los Angeles for a year during rewrites on the project in Spielberg's bungalow at Universal. After writing two more scripts for Spielberg, The Goonies and Young Sherlock Holmes, Columbus own directing career was launched a few years later with Adventures in Babysitting. He is best known to audiences as the director of the runaway hit Home Alone, written and produced by John Hughes its sequel Home Alone 2, and most recently Mrs. Doubtfire.",
        "Birth":1958
      },
      "ImageURL":"https://m.media-amazon.com/images/I/61pGKELm21L._AC_SY606_.jpg",
      "Featured":false
    },
    {
      "Title":"Scream",
      "Description":"A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.",
      "Genre": {
        "Name":"Horror",
        "Description":"Horror is a genre of fiction which is intended to frighten, scare, or disgust. Horror is often divided into the sub-genres of psychological horror and supernatural horror, which is in the realm of speculative fiction."
      },
      "Director": {
        "Name":"Wes Craven",
        "Bio":"Wes Craven has become synonymous with genre bending and innovative horror, challenging audiences with his bold vision.",
        "Birth":1939
      },
      "ImageURL":"https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_.jpg",
      "Featured":false
    },
    {
      "Title":"Ready Player One",
      "Description":"When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.",
      "Genre": {
        "Name":"Action",
        "Description":"Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats."
      },
      "Director": {
        "Name":"Steven Spielberg",
        "Bio":"One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer blockbuster with Jaws (1975), and he has done more to define popular film-making since the mid-1970s than anyone else.",
        "Birth":1946
      },
      "ImageURL":"https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg",
      "Featured":false
    },
    {
      "Title":"Krampus",
      "Description":"A boy who has a bad Christmas accidentally summons a festive demon to his family home.",
      "Genre": {
        "Name":"Horror",
        "Description":"Horror is a genre of fiction which is intended to frighten, scare, or disgust. Horror is often divided into the sub-genres of psychological horror and supernatural horror, which is in the realm of speculative fiction."
      },
      "Director": {
        "Name":"Michael Dougherty",
        "Bio":"Michael Dougherty was born in Columbus, Ohio, USA. He is a writer and director, known for Trick 'r Treat and Superman Returns.",
        "Birth":1974
      },
      "ImageURL":"https://m.media-amazon.com/images/M/MV5BMjk0MjMzMTI3NV5BMl5BanBnXkFtZTgwODEyODkxNzE@._V1_FMjpg_UX1000_.jpg",
      "Featured":false
    },
    {
      "Title":"Halloween",
      "Description":"Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.",
      "Genre": {
        "Name":"Horror",
        "Description":"Horror is a genre of fiction which is intended to frighten, scare, or disgust. Horror is often divided into the sub-genres of psychological horror and supernatural horror, which is in the realm of speculative fiction."
      },
      "Director": {
        "Name":"John Carpenter",
        "Bio":"John Howard Carpenter was bron in Carthage, New York. He began making short films in 1962, and won an Academy Award for Best Live-Action Short Subject in 1970. He has helmed many classic horro and sci-fi films.",
        "Birth":1948
      },
      "ImageURL":"https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      "Featured":false
    },
    {
      "Title":"Jaws",
      "Description":"When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
      "Genre": {
        "Name":"Thriller",
        "Description":"Thriller is a type of fiction that usually presents danger, or gives the viewer a sense of excitement."
      },
      "Director": {
        "Name":"Steven Spielberg",
        "Bio":"One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer blockbuster with Jaws (1975), and he has done more to define popular film-making since the mid-1970s than anyone else.",
        "Birth":1946
      },
      "ImageURL":"https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
      "Featured":false
    },
    {
      "Title":"I Love You, Man",
      "Description":"Friendless Peter Klaven goes on a series of man-dates to find a Best Man for his wedding. But, when his insta-bond with his new B.F.F. puts a strain on his relationship with his fiancée, can the trio learn to live happily ever after?",
      "Genre": {
        "Name":"Comedy",
        "Description":"Comedy is a genre of fiction that consists of discourses or works intended to be humorous or amusing by inducing laughter."
      },
      "Director": {
        "Name":"John Hamburg",
        "Bio":"John Hamburg was born on 26 May 1970 in New York City, New York, USA. He is a producer and director, known for Little Fockers (2010), Why Him? (2016) and I Love You, Man (2009). He has been married to Christina Kirk since 24 September 2005.",
        "Birth":1970
      },
      "ImageURL":"https://m.media-amazon.com/images/M/MV5BMTU4MjI5NTEyNV5BMl5BanBnXkFtZTcwNjQ1NTMzMg@@._V1_FMjpg_UX1000_.jpg",
      "Featured":false
    },
    {
      "Title":"IT",
      "Description":"In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
      "Genre": {
        "Name":"Horror",
        "Description":"Horror is a genre of fiction which is intended to frighten, scare, or disgust. Horror is often divided into the sub-genres of psychological horror and supernatural horror, which is in the realm of speculative fiction."
      },
      "Director": {
        "Name":"Andy Muschietti",
        "Bio":"Andy Muschietti was born in Buenos Aires, Federal District, Argentina. He is a producer and director, known for Mama (2013), IT (2017) and IT: Chapter Two (2019).",
        "Birth":1973
      },
      "ImageURL":"https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg",
      "Featured":false
    },
    {
      "Title":"Ghostbusters",
      "Description":"Three parapsychologists forced out of their university funding set up shop as a unique ghost removal service in New York City, attracting frightened yet skeptical customers.",
      "Genre": {
        "Name":"Action",
        "Description":"Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats."
      },
      "Director": {
        "Name":"Ivan Reitman",
        "Bio":"Born in Canada, producer and director Ivan Reitman created many of American cinema's most successful and best loved feature films and has worked with Hollywood's acting elite.",
        "Birth":1946
      },
      "ImageURL":"https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_FMjpg_UX1000_.jpg",
      "Featured":false
    },
    {
      "Title":"Back to the Future",
      "Description":"Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
      "Genre": {
        "Name":"Adventure",
        "Description":"Adventure genre includes stories that are exciting and sometimes risky."
      },
      "Director": {
        "Name":"Robert Zemeckis",
        "Bio":"A whiz-kid with special effects, Robert is from the Spielberg camp of film-making (Steven Spielberg produced many of his films). Robert has proved he can work a serious story around great effects.",
        "Birth":1952
      },
      "ImageURL":"https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      "Featured":false
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