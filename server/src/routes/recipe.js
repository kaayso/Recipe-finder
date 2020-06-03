const { Router } = require('express');
const controllers = require('../controllers/recipe');
const middlewares = require('../middlewares');

const router = Router();

router.get('/', middlewares.auth, controllers.recipes);
router.post('/', middlewares.auth, controllers.createRecipe);
router.put('/', middlewares.auth, controllers.updateRecipe);
router.delete('/', middlewares.auth, controllers.deleteRecipe);

module.exports = router;