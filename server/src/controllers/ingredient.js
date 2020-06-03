/* eslint-disable no-underscore-dangle */
const Ingredient = require('../models/Ingredient');

const ingredients = (req, res, next) => {
  Ingredient.find((err, items) => {
    if (err) return next(err);
    return res.status(200).json(items);
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
  Ingredient.findByIdAndUpdate({ _id: ingredient._id }, ingredient, (err, result) => {
    if (err) return next(err);
    return res.status(200).json(result);
  });
};

const deleteIngredient = (req, res, next) => {
  Ingredient.findOneAndDelete(req._id, (err) => {
    if (err) return next(err);
    return res.status(200).json({ message: 'Ingredient has been deleted' });
  });
};

module.exports = {
  ingredients,
  createIngredient,
  updateIngredient,
  deleteIngredient,
};