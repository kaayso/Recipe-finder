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
    message: res.statusCode === 404 ? 'resource not found' : error.message,
    stack: process.env.NODE_ENV === 'production' ? '🐥' : error.stack, // show stack only in dev env
  });
};

// handle invalid token
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN_ACCESS);
    if (req.headers.uid !== decodedToken.uid) {
      res.status(403);
      return next(new Error('invalid user'));
    }
    next();
  } catch {
    res.status(401);
    next(new Error('invalid request'));
  }
};

const pagination = (model) => async (req, res, next) => {
  let data = await model.find((err) => {
    if (err) return next(err);
  });
  // get only default items or his own items
  data = data.filter((i) => {
    if (i.uid === req.headers.uid || i.default === true) return i;
  });

  let page = parseInt(req.query.page, 10);
  let limit = parseInt(req.query.limit, 10);
  // if those params are not specified then return all items
  if (!page || !limit) {
    page = 1;
    limit = data.length;
  }
  const results = {};

  // define sart and end index
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  // add previous page if exist
  if (startIndex > 0 && startIndex <= data.length) {
    results.previousPage = {
      page: page - 1,
      items: limit,
    };
  }

  // add next page if exist (almost 1 item)
  if (endIndex < data.length) {
    const extraItems = ((page + 1) * limit) - data.length;
    results.nextPage = {
      page: page + 1,
      items: extraItems > 0 ? limit - extraItems : limit,
    };
  }

  results.data = data.slice(startIndex, endIndex);
  res.paginationResults = results;
  next();
};

module.exports = {
  notFound,
  errorHandler,
  auth,
  pagination,
};