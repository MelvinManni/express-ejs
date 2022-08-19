const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", "./views");

const posts = [
  {
    id: "1",
    title: "Post 1",
    body: "This is post 1",
  },
  {
    id: "2",
    title: "Post 2",
    body: "This is post 2",
  },
  {
    id: "3",
    title: "Post 3",
    body: "This is post 3",
  },
];

app.get("/", (req, res) => {
  res.render("index", {});
});

app.get("/posts", (req, res) => {
    res.render("posts", { posts });
} );

app.get("/post/:id", (req, res) => {
    const post = posts.find(post => post.id === req.params.id);
    res.render("post", { ...post });
} );

app.all("*", (req, res) => {
    res.status(404).send("404 Not Found");
} );


module.exports = app;
