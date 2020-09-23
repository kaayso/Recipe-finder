const {
  Router
} = require('express');
const {
  recipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  recipeById,
  getRecipesFromIngredients
} = require('../controllers/recipe');
const {
  auth,
  pagination
} = require('../middlewares');
const Recipe = require('../models/Recipe');

const router = Router();
router.get('/', auth, pagination(Recipe), recipes);
router.get('/:id', auth, recipeById);
router.post('/', auth, createRecipe);
router.post('/search', auth, getRecipesFromIngredients);
router.put('/', auth, updateRecipe);
router.delete('/:id', auth, deleteRecipe);

module.exports = router;