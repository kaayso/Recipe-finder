/* eslint-disable no-underscore-dangle */
const Recipe = require('../models/Recipe');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${path.join(__dirname, '../assets/images/recipes')}`)
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`)
  }
})

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

const addRecipeImage = (req, res, next) => {
  // save image
  const upload = multer({
    storage: storage
  }).single('recipeImage');

  upload(req, res, (err) => {
    if (err) {
      next(err);
    }
    // get recipe id 
    const recipeId = req.body.recipeId;
    // update recipe object
    Recipe.findOneAndUpdate({
      _id: recipeId
    }, {
      image: `/images/recipes/${req.file.filename}`
    }, (err) => {
      if (err) {
        res.statusCode = 404;
        return next(err);
      }
      return res.status(201).json({
        message: 'Recipe\'s image successfully added.',
      });
    });
  });
}

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
  Recipe.findOneAndDelete(req._id, (err) => {
    if (err) return next(err);
    return res.status(200).json({
      message: 'Recipe has been deleted'
    });
  });
};

module.exports = {
  recipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  recipeById,
  addRecipeImage
};