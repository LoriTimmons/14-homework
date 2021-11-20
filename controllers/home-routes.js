const router = require("express").Router();
const { User, Post, Comment } = require("../models");

// get all home routes
router.get("/", (req, res) => {
  Post.findAll({
    include: [
      User
    ]
  }).then((postData) => {
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log("This is Posts" , posts);
    res.render("home", {
      posts,
    });
  });
});

// get one post 
router.get("/blog/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      User
    ]
  })
  .then((postData) => {
    if (!postData) {
      res.status(404).json( { message: "post not found"});
      return;
    }
    const post = postData.get({plain: true});
    console.log("This is the single post" , post);
    res.render("singleBlog", {
      post,
    });
  });
});

// log in
router.get("/login", (req, res) => {
  // if(req.sessions.loggedIn) {
  //   // redirect to homepage
  //   res.redirect("/")
  // }
  res.render("login")
}) 

module.exports = router;

