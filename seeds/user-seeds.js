const {User} = require('../models')

const userdata = [
    {
       username: "mucho51",
       email: "lorimucho@gmail.com",
       password: "password123" 
    },
    {
        username: "loritimmons",
        email: "loritimmons@gmail.com",
        password: "password321" 
     }
] 

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;