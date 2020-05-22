const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('./middlewares');

const PORT = process.env.PORT_SERVER || 2001;
const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});
