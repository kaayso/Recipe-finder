const Recipe = require('../models/Recipe');
const Ingredient = require('../models/Ingredient');
const recipes = require('../assets/recipes');
const ingredients = require('../assets/ingredients');

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
module.exports = populateDb;
