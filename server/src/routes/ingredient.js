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
} = require('../middlewares');

const router = Router();

router.get('/', auth, ingredients);
router.get('/category/:cat', auth, ingredientsByCategory);
router.get('/:id', auth, ingredientById);
router.post('/', auth, createIngredient);
router.put('/', auth, updateIngredient);

module.exports = router;