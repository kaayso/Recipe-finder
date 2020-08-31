const {
  Router
} = require('express');
const controllers = require('../controllers/recipe');
const middlewares = require('../middlewares');
const Recipe = require('../models/Recipe');

const router = Router();
router.get('/', middlewares.auth, middlewares.pagination(Recipe), controllers.recipes);
router.get('/:id', middlewares.auth, controllers.recipeById);
router.post('/', controllers.createRecipe);
router.put('/image', controllers.addRecipeImage);
router.put('/', middlewares.auth, controllers.updateRecipe);
router.delete('/', middlewares.auth, controllers.deleteRecipe);

module.exports = router;