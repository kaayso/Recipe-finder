const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const httpMiddlewares = require('./middlewares');
const user = require('./routes/user');
const recipe = require('./routes/recipe');
const ingredient = require('./routes/ingredient');

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

app.get('/', (req, res) => {
  res.send({
    "Application-name": "Recipe Finder",
    "Author": "Faycel BENYOUSSA"
  })
})

// middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json());
app.use(express.static(`${__dirname}/assets/`));
app.use('/api/user', user);
app.use('/api/recipe', recipe);
app.use('/api/ingredient', ingredient);
app.use(httpMiddlewares.notFound);
app.use(httpMiddlewares.errorHandler);

// db connection
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000,
  autoIndex: process.env.NODE_ENV !== 'production', // only in dev mod
};

mongoose
  .connect(process.env.DB_URL, options)
  .catch((error) => console.error(error));

mongoose.connection.on('error', (err) => {
  console.error(err);
});