const controllers = require('../controllers/user');

const {
  Router
} = require('express');

const router = Router();

router.get('/', controllers.allUsers);

router.post('/signup', controllers.singup);

router.post('/login', controllers.login);

module.exports = router;