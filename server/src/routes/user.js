const {
  Router,
} = require('express');
const controllers = require('../controllers/user');
const middlewares = require('../middlewares');


const router = Router();

router.get('/', middlewares.auth, controllers.allUsers);

router.get('/:uid', middlewares.auth, controllers.userById);

router.post('/signup', controllers.singup);

router.post('/login', controllers.login);

router.post('/token', controllers.getNewAccessToken);

router.post('/logout', controllers.logout);

module.exports = router;