/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Token = require('../models/Token');

const SALT_ROUNDS = 10;
const TOKEN_ACCESS_DURATION = '15m';
const REFRESH_TOKEN_ACCESS_DURATION = '1d';
const generateAccessToken = (user, expire) => jwt.sign({
    uid: user._id,
  },
  process.env.SECRET_TOKEN_ACCESS, {
    expiresIn: expire,
  },
);

const allUsers = (req, res, next) => {
  User.find((err, users) => {
    if (err) return next(err);
    return res.status(200).json(users);
  });
};

const userById = (req, res, next) => {
  User.findOne({
    _id: req.params.uid
  }, (err, user) => {
    if (err) return next(err);
    return res.status(200).json(user);
  });
};

const singup = (req, res, next) => {
  const user = new User(req.body);

  bcrypt.hash(user.password, SALT_ROUNDS, (bErr, hash) => {
    if (bErr) return next(bErr);

    // Store hash in DB.
    user.password = hash;
    user.save((err) => {
      if (err) {
        if (err.name === 'ValidationError') res.status(422);
        if (err.message.includes('to be unique')) res.status(409);
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
    },
    (err, result) => {
      if (err) return next(err);
      if (!result) {
        res.status(404);
        return next(new Error('user not found'));
      }
      // check password
      bcrypt.compare(user.password, result.password, (bErr, isEqual) => {
        if (bErr) return next(bErr);
        if (!isEqual) {
          res.status(404);
          return next(new Error('incorrect password'));
        }
        // all is fine, generate tokens and save it in DB
        const myToken = generateAccessToken(result, TOKEN_ACCESS_DURATION);
        const myRefreshToken = generateAccessToken(result, REFRESH_TOKEN_ACCESS_DURATION);
        const token = new Token({
          token: myRefreshToken,
        });
        token.save((error) => {
          if (error) {
            if (error.name === 'ValidationError') res.status(422);
            return next(error);
          }
        });

        res.status(200).json({
          // eslint-disable-next-line no-underscore-dangle
          uid: result._id,
          token: myToken,
          refreshToken: myRefreshToken,
        });
      });
    },
  );
};

const getNewAccessToken = async (req, res, next) => {
  // if user's token is not specified
  if (!req.body.refreshToken) {
    res.status(403);
    return next(new Error('invalid request'));
  }
  // grab tokens from db
  const tokens = await Token.find();
  const currentRefreshTokens = tokens.map((element) => element.token);
  // check if user token is registered
  if (!currentRefreshTokens.includes(req.body.refreshToken)) {
    res.status(403);
    return next(new Error('invalid token'));
  }
  // generate and send a new token
  try {
    const decodedToken = jwt.verify(
      req.body.refreshToken,
      process.env.SECRET_TOKEN_ACCESS,
    );

    const {
      uid
    } = decodedToken;
    User.findOne({
      _id: uid
    }, (err, result) => res.status(201).json({
      token: generateAccessToken(
        result,
        TOKEN_ACCESS_DURATION,
      ),
    }));
  } catch {
    // if exists remove it from db
    if (currentRefreshTokens.includes(req.body.refreshToken)) {
      Token.findOneAndDelete({
        token: req.body.refreshToken
      }, (err) => {
        if (err) console.error(err);
      });
    }
    res.status(403);
    return next(new Error('invalid request'));
  }
};

const logout = (req, res, next) => {
  try {
    Token.findOneAndDelete({
        token: req.body.token,
      },
      (err, doc) => {
        if (doc) {
          return res.status(200).json({
            message: 'token was successfully removed',
          });
        }
        res.status(422);
        return next(new Error('unknown token'));
      },
    );
  } catch {
    res.status(422);
    return next(new Error('invalid request'));
  }
};

module.exports = {
  allUsers,
  singup,
  login,
  getNewAccessToken,
  logout,
  userById,
};