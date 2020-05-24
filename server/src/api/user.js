const User = require('../models/User');
const {
  Router
} = require('express');

const router = Router();

router.get('/', (req, res) => {
  User.find((err, users) => {
    err && next(err);
    res.json(users);
  });
});

router.post('/', (req, res, next) => {
  const user = new User(req.body);

  user.save((err, user) => {
    if (err) {
      err.name === 'ValidationError' && res.status(422);
      next(err);
    }
    // saved!
    res.json(user);
  });
});


module.exports = router;