const { Router } = require('express');
const controllers = require('../controllers/ingredient');
const middlewares = require('../middlewares');

const router = Router();
// TODO : get ing by cat & by id
router.get('/', middlewares.auth, controllers.ingredients);
router.post('/', middlewares.auth, controllers.createIngredient);
router.put('/', middlewares.auth, controllers.updateIngredient);

module.exports = router;