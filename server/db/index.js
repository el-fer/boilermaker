const db = require('./database')
const Owner = require('./owner')
const Puppy = require('./puppy')

Puppy.belongsToMany(Owner, {through: 'owner_puppies'})
Owner.belongsToMany(Puppy, {through: 'owner_puppies'})

module.exports = {
  db,
  Puppy,
  Owner
}
