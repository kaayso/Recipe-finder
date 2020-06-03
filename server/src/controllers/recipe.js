/* eslint-disable no-underscore-dangle */
const Recipe = require('../models/Recipe');

const recipes = (req, res, next) => {
  Recipe.find((err, items) => {
    if (err) return next(err);
    const result = items.filter((i) => i.uid === req.uid || i.uid === '0');
    return res.status(200).json(result);
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
};