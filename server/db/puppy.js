const Sequelize = require('sequelize');
const db = require('./database');

const Puppy = db.define('puppy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  breed: {
    type: Sequelize.ENUM('rhodesian ridgeback', 'pitbull', 'dobberman'),
    defaultValue: 'rhodesian ridgeback'
  },
  age: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 20
    }
  }
})

module.exports = Puppy
