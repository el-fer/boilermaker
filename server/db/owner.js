const Sequelize = require('sequelize');
const db = require('./database');

const Owner = db.define('owner', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  preferred_pet: {
    type: Sequelize.ENUM('dog', 'cat', 'other'),
    defaultValue: 'dog'
  },
})

module.exports = Owner
