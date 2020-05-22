
const notFound = (req, res, next) => {
  const error = new Error(`Route not found - ${req.originalUrl}`);
  res.status(404);
  next(error); // send to error handler
};

//  Error handling middleware (specific for routes)
// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    statusCode,
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🐥' : error.stack, // show stack only in dev env
  });
};

module.exports = {
  notFound,
  errorHandler,
};
