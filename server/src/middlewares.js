const jwt = require('jsonwebtoken');

//  Error handling middleware (specific for routes)
const notFound = (req, res, next) => {
  const error = new Error(`Route undefined- ${req.originalUrl}`);
  res.status(404);
  next(error); // send to error handler
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    name: error.name,
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🐥' : error.stack, // show stack only in dev env
  });
};

// handle invalid token
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN_ACCESS);
    if (req.body.uid && req.body.uid !== decodedToken.uid) {
      res.status(403);
      return next(new Error('invalid user'));
    }
    req.uid = decodedToken.uid;
    next();
  } catch {
    res.status(401);
    next(new Error('invalid request'));
  }
};

module.exports = {
  notFound,
  errorHandler,
  auth,
};