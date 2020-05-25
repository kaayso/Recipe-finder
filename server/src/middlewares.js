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

module.exports = {
  notFound,
  errorHandler,
};