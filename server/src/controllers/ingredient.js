/* eslint-disable no-underscore-dangle */
const Ingredient = require('../models/Ingredient');

const ingredients = (req, res) => {
  Ingredient.find((err, result) => {
    if (err) return next(err);
    return res.status(200).json(result);
  });
};

const ingredientsByCategory = (req, res) => {
  console.log(res.paginationResults)
  const ingredients = res.paginationResults.data.filter(ing => ing.category === req.params.cat);
  res.status(200).json(ingredients);
}
const ingredientById = (req, res, next) => {
  Ingredient.findOne({
    _id: req.params.id
  }, (err, result) => {
    if (err) {
      res.statusCode = 404;
      return next(err);
    }
    res.status(200).json(result);
  });
};

const createIngredient = (req, res, next) => {
  const ingredient = new Ingredient(req.body);

  ingredient.save((err) => {
    if (err) {
      if (err.name === 'ValidationError') res.status(422);
      return next(err);
    }
    // saved
    res.status(201).json({
      message: 'ingredient successfully created',
    });
  });
};

const updateIngredient = (req, res, next) => {
  const ingredient = new Ingredient(req.body);
  Ingredient.findByIdAndUpdate({
    _id: ingredient._id
  }, ingredient, (err, result) => {
    if (err) return next(err);
    return res.status(200).json(result);
  });
};

const deleteIngredient = (req, res, next) => {
  Ingredient.findOneAndDelete(req._id, (err) => {
    if (err) return next(err);
    return res.status(200).json({
      message: 'Ingredient has been deleted'
    });
  });
};

module.exports = {
  ingredients,
  createIngredient,
  updateIngredient,
  deleteIngredient,
  ingredientById,
  ingredientsByCategory
};