import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let post = 0
let totalPost = [];
let titlePost = [];
let descriptionPost = [];
let colorPost = [];
let storyPick = 0;
const day = new Date();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs", {
        post: post,
        totalPost: totalPost,
        titlePost: titlePost,
        descriptionPost: descriptionPost,
        colorPost: colorPost,
        day: day
    });
  });

app.get("/post", (req, res) => {
    res.render("post.ejs");
  });

app.get("/profile", (req, res) => {
    res.render("profile.ejs", {
        post: post,
        totalPost: totalPost,
        titlePost: titlePost,
        descriptionPost: descriptionPost,
        colorPost: colorPost,
        day: day
    });
  });

  app.get("/story", (req, res) => {
    res.render("story.ejs", {
        post: post,
        totalPost: totalPost,
        titlePost: titlePost,
        descriptionPost: descriptionPost,
        colorPost: colorPost,
        day: day
    });
  });
  app.get("/story2", (req, res) => {
    res.render("storytwo.ejs", {
        post: post,
        totalPost: totalPost,
        titlePost: titlePost,
        descriptionPost: descriptionPost,
        colorPost: colorPost,
        day: day
    });
  });

app.post("/submit", (req, res) => {  
    post++;
    totalPost.push(post);
    titlePost.push(req.body['title']);
    descriptionPost.push(req.body['storyDetail']);
    colorPost.push(req.body['colorPick'])
    res.render("submit.ejs", {
        post: post,
        totalPost: totalPost,
        titlePost: titlePost,
        descriptionPost: descriptionPost,
        colorPost: colorPost
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
  

