const { Router } = require('express');
const controllers = require('../controllers/ingredient');
const middlewares = require('../middlewares');
const Ingredient = require('../models/Ingredient');

const router = Router();
// TODO : get ing by cat
router.get('/', middlewares.auth, middlewares.pagination(Ingredient), controllers.ingredients);
router.get('/category/:cat', middlewares.auth, middlewares.pagination(Ingredient), controllers.ingredientsByCategory);
router.get('/:id', middlewares.auth, controllers.ingredientById);
router.post('/', middlewares.auth, controllers.createIngredient);
router.put('/', middlewares.auth, controllers.updateIngredient);

module.exports = router;