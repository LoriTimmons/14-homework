// ? for line one
// const happy = require("sequelize")
// build blog and comment

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

// User Model
// Need to add Method to run on instance data to check P/W (per user)
class User extends Model {}
User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },

  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },

    // bcrypt 
    hooks: {

      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      }

      // async beforeUpdate(updatedUserData) {
      //   updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
      //   return updatedUserData;
      // }
    },
},
 {
  sequelize,
  timestamp: false,
  freezeTableName: true,
  underscored: true,
  modelName: "user",
 }
 );

module.exports = User;
