const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALT_ROUNDS = 10;


const allUsers = (req, res, next) => {
  User.find((err, users) => {
    if (err) return next(err);
    return res.status(200).json(users);
  });
};

const singup = (req, res, next) => {
  const user = new User(req.body);

  bcrypt.hash(user.password, SALT_ROUNDS, (err, hash) => {
    if (err) return next(err);

    // Store hash in DB.
    user.password = hash;
    user.save((err, result) => {
      if (err) {
        err.name === 'ValidationError' && res.status(422);
        err.message.includes('to be unique') && res.status(409);
        return next(err);
      }
      // saved!
      res.status(201).json({
        message: 'user added successfully',
      });
    });
  });
};

const login = (req, res, next) => {
  const user = req.body;
  // get user from DB
  User.findOne({
    username: user.username,
  }, (err, result) => {
    if (err) return next(err);
    if (!result) {
      res.status(401);
      return next(new Error('user not found'));
    }
    // check password
    bcrypt.compare(user.password, result.password, (err, isEqual) => {
      if (err) return next(err);
      if (!isEqual) {
        res.status(401);
        next(new Error('incorrect password'));
        return;
      }
      const myToken = jwt.sign({
        uid: result._id,
      }, process.env.SECRET_TOKEN_ACCESS, {
        expiresIn: '1h'
      });
      res.status(200).json({
        uid: result._id,
        token: myToken
      });
    });
  });
};


module.exports = {
  allUsers,
  singup,
  login
}