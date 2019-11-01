// apiRoutes/puppies.js
const router = require('express').Router();
const Owner = require('../db/owner')
const Puppy = require('../db/puppy')

//matches GET requests to /api/owners/


router.get('/', async (req, res, next) => {
  try {
    res.json(await Owner.findAll(
      // {
      //   include: [{
      //     model: Puppy
      //   }]
      // }
    ))
  }
  catch (err) {
    next(err)
  }
})
// matches POST requests to /api/puppies/
// router.post('/', function (req, res, next) { /* etc */});
// // matches PUT requests to /api/puppies/:puppyId
// router.put('/:puppyId', function (req, res, next) { /* etc */});
// // matches DELETE requests to /api/puppies/:puppyId
// router.delete('/:puppyId', function (req, res, next) { /* etc */});

module.exports = router;
