/* eslint-disable no-underscore-dangle */
const Recipe = require('../models/Recipe');

const recipes = (req, res) => res.status(200).json(res.paginationResults);

const recipeById = (req, res, next) => {
  Recipe.findOne({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.statusCode = 404;
      return next(err);
    }
    res.status(200).json(result);
  });
};

const createRecipe = (req, res, next) => {
  const recipe = new Recipe(req.body);
  recipe.uid = req.uid;
  recipe.save((err) => {
    if (err) {
      if (err.name === 'ValidationError') res.status(422);
      return next(err);
    }
    // saved
    res.status(201).json({
      message: 'recipe successfully created',
    });
  });
};

const updateRecipe = (req, res, next) => {
  const recipe = new Recipe(req.body);
  Recipe.findByIdAndUpdate({ _id: recipe._id }, recipe, (err) => {
    if (err) return next(err);
    return res.status(200).json(recipe);
  });
};

const deleteRecipe = (req, res, next) => {
  Recipe.findOneAndDelete(req._id, (err) => {
    if (err) return next(err);
    return res.status(200).json({ message: 'Recipe has been deleted' });
  });
};

module.exports = {
  recipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  recipeById,
};