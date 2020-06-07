const { Router } = require('express');
const controllers = require('../controllers/recipe');
const middlewares = require('../middlewares');
const Recipe = require('../models/Recipe');

const router = Router();
// TODO : get recipes by id
router.get('/', middlewares.auth, middlewares.pagination(Recipe), controllers.recipes);
router.post('/', middlewares.auth, controllers.createRecipe);
router.put('/', middlewares.auth, controllers.updateRecipe);
router.delete('/', middlewares.auth, controllers.deleteRecipe);

module.exports = router;