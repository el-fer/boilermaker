const { db, Puppy, Owner } = require('./server/db')

const owners = [
  { name: 'AJ', imageUrl: '/images/IR5.png', preferred_pet: 'dog' },
  { name: 'Mel', imageUrl: '/images/MQ9.png', preferred_pet: 'cat' },
  { name: 'Fer', imageUrl: '/images/SUY.png', preferred_pet: 'other' },
  { name: 'Laure', imageUrl: '/images/V3R.png', preferred_pet: 'dog' },
  { name: 'Steve', imageUrl: '/images/WT6.png', preferred_pet: 'cat' },
  { name: 'Marcus', imageUrl: '/images/R2T.png', preferred_pet: 'other' }
]

const puppies = [
  { name: 'Darwin', breed: 'rhodesian ridgeback', age: 1 },
  { name: 'Haddie', breed: 'pitbull', age: 2 },
  { name: 'Curly', breed: 'dobberman', age: 3 },
  { name: 'Princess', breed: 'rhodesian ridgeback', age: 4 },
  { name: 'Fido', breed: 'pitbull', age: 3 },
  { name: 'Lassie', breed: 'dobberman', age: 2 },
]

const seed = async () => {
  try {
    await db.sync({ force: true })
    // seed your database here!
    await Promise.all(owners.map(owner =>
      Owner.create(owner)))
    .then(() =>
     Promise.all(puppies.map(puppy =>
      Puppy.create(puppy))))
  } catch (err) {
   console.log(err)
  }
}

const seedThrough = async() => {
  try {
    const newPuppy = await Puppy.findByPk(1);
    const newOwner1 = await Owner.findByPk(1);
    await newOwner1.addPuppy(newPuppy);

    const newOwner2 = await Owner.findByPk(2);
    await newOwner2.addPuppy(newPuppy);

    const newOwner3 = await Owner.findByPk(3);
    await newOwner3.addPuppy(newPuppy);

    const newOwner = await Owner.findByPk(4);
    const newPuppy3 = await Puppy.findByPk(3);
    await newPuppy3.addOwner(newOwner);

    const newPuppy4 = await Puppy.findByPk(4);
    await newPuppy4.addOwner(newOwner);

    const newPuppy5 = await Puppy.findByPk(5);
    await newPuppy5.addOwner(newOwner);

  } catch (err) {
    console.log(err)
   }
}


module.exports = seed
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => seedThrough())
    .then(() => {
      console.log('Seeding success!')
      db.close()
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
      db.close()
    })
}
