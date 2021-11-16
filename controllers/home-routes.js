const router = require('express').Router();
const {User, Post, Comment} = require('../models');

// get all home routes 
router.get('/', (req, res) => {
  Post.findAll({})  
.then(postData => {
    const posts = postData.map(post => post.get({ plain: true}));
res.render('home' , {
    posts,
})
})

})

module.exports = router; 
