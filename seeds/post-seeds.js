const {Post} = require('../models');

const postData = [
   {
    title: "Tech Blog",
    body: "This is the blog",
    user_id: 1
   },
   {
    title: "My Blog",
    body: "This is my blog",
    user_id: 2
   }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;