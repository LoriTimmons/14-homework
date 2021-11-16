const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedPost = require('./post-seeds');
const seedComments = require('./comment-seeds')

const seedAllData = async () => {
    await sequelize.sync({force: true});
    console.log('Enter Database');
    await seedUsers();
    console.log('Users Seeded');
    await seedPost();
    console.log("Posts Seeded");
    await seedComments();
    console.log("Comments Seeded");

    process.exit(0);
}

seedAllData();