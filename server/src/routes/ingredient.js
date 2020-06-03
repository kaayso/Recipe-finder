const { Router } = require('express');
const controllers = require('../controllers/ingredient');
const middlewares = require('../middlewares');

const router = Router();

router.get('/', middlewares.auth, controllers.ingredients);
router.post('/', middlewares.auth, controllers.createIngredient);
router.put('/', middlewares.auth, controllers.updateIngredient);

module.exports = router;