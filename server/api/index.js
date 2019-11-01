// apiRoutes/index.js
const router = require('express').Router();


router.use('/puppies', require('./puppies')); // matches all
router.use('/owners', require('./owners')); // matches all

// Sloths?!?! Get outta town!
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
