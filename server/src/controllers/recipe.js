/* eslint-disable no-underscore-dangle */
const Recipe = require('../models/Recipe');

const recipes = (req, res) => res.status(200).json(res.paginationResults);

const recipeById = (req, res, next) => {
  Recipe.findOne({
    _id: req.params.id
  }, (err, result) => {
    if (err) {
      res.statusCode = 404;
      return next(err);
    }
    res.status(200).json(result);
  });
};


const createRecipe = (req, res, next) => {
  // save recipe
  const recipe = new Recipe(req.body);
  if (req.body.default) {
    recipe.uid = 0;
  } else {
    recipe.uid = req.headers.uid;
  }

  recipe.save((err, item) => {
    if (err) {
      if (err.name === 'ValidationError') res.status(422);
      return next(err);
    }
    // saved
    res.status(201).json({
      message: 'Recipe successfully created.',
      id: item._id
    });
  });
};

const updateRecipe = (req, res, next) => {
  const recipe = new Recipe(req.body);
  Recipe.findByIdAndUpdate({
    _id: recipe._id
  }, recipe, (err) => {
    if (err) return next(err);
    return res.status(200).json(recipe);
  });
};

const deleteRecipe = (req, res, next) => {
  Recipe.findOneAndDelete({
      _id: req.params.id
    },
    (err) => {
      if (err) return next(err);
      return res.status(200).json({
        message: 'Recipe has been deleted'
      });
    });
};

const getRecipesFromIngredients = async (req, res, next) => {
  const userIngredients = req.body.userIngredients.map(ing => ing.name.toLowerCase());
  const result = new Set();

  try {
    let recipes = await Recipe.find();
    recipes = recipes.filter((i) => {
      if (i.uid === req.headers.uid || i.default === true) return i;
    });
    recipes.forEach(recipe => {
      const recipeIngs = recipe.ingredients.map(ing => ing.name.toLowerCase());
      userIngredients.forEach(uIng => {
        if (recipeIngs.find((ing) => uIng === ing)) {
          result.add(recipe);
        }
      });
    });
  } catch (error) {
    return next(error);
  }
  return res.status(200).json({
    userIngredients: [...result]
  });
}

module.exports = {
  recipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  recipeById,
  getRecipesFromIngredients
};