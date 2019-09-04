const UserController = require('../controllers/UserController')
const router = require('express').Router();

router.get('/', UserController.get);
router.post('/', UserController.post);
router.put('/', UserController.put);
router.delete('/', UserController.del);

module.exports = router;