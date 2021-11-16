const {Comment} = require("../models");

const commentData = [
    {
       comment_text: "Text",
       user_id: 2,
       post_id: 1, 
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;