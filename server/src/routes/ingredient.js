const {
  Router
} = require('express');
const {
  ingredients,
  ingredientsByCategory,
  ingredientById,
  createIngredient,
  updateIngredient
} = require('../controllers/ingredient');
const {
  auth,
  pagination
} = require('../middlewares');
const Ingredient = require('../models/Ingredient');

const router = Router();

router.get('/', auth, pagination(Ingredient), ingredients);
router.get('/category/:cat', auth, pagination(Ingredient), ingredientsByCategory);
router.get('/:id', auth, ingredientById);
router.post('/', auth, createIngredient);
router.put('/', auth, updateIngredient);

module.exports = router;