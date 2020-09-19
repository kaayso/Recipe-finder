const {
  Router,
} = require('express');
const {
  allUsers,
  singup,
  login,
  getNewAccessToken,
  logout,
  userById,
} = require('../controllers/user');
const {
  auth
} = require('../middlewares');


const router = Router();

router.get('/', auth, allUsers);

router.get('/:uid', auth, userById);

router.post('/signup', singup);

router.post('/login', login);

router.post('/token', getNewAccessToken);

router.post('/logout', logout);

module.exports = router;