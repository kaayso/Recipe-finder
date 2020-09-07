const Recipe = require('../models/Recipe');
const Ingredient = require('../models/Ingredient');
const recipes = require('../assets/recipes');
const ingredients = require('../assets/ingredients');
const mongoose = require('mongoose');
require('dotenv').config();

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

const populateDb = () => {
  console.log('Populate database...');
  // add ingredients
  ingredients.forEach((ing) => {
    const ingredient = new Ingredient(ing);
    ingredient.save((err) => {
      if (err) {
        console.error(`Error : ${ingredient.name} not saved in db.`);
        return process.exit(1);
      }
    });
  });
  console.log('   ✓ | Ingredients');

  // add recipes
  recipes.forEach((rec) => {
    const recipe = new Recipe(rec);
    recipe.save((err) => {
      if (err) {
        console.error(`Error : ${recipe.name} not saved in db.`);
        return process.exit(1);
      }
    });
  });
  console.log('   ✓ | recipes');
};


// Add recipes & ingredients to db
populateDb();