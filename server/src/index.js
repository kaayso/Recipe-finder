const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const middlewares = require('./middlewares');
const user = require('./api/user');

dotenv.config();
const PORT = process.env.PORT_SERVER || 4000;
const app = express();
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

// middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());
app.use('/api/user', user);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// db connection
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000,
  autoIndex: process.env.NODE_ENV !== 'production',
};

mongoose.connect(process.env.DB_URL, options).catch((error) => console.error(error));

mongoose.connection.on('error', (err) => {
  console.error(err);
});