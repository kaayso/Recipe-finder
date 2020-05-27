const controllers = require('../controllers/user');
const middlewares = require('../middlewares');

const {
  Router
} = require('express');

const router = Router();

router.get('/', middlewares.auth, controllers.allUsers);

router.post('/signup', controllers.singup);

router.post('/login', controllers.login);

module.exports = router;