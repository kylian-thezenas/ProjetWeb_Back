const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/api/user/', userController.alluser);
router.post('/api/user/', userController.addTUser);
router.get('/api/user/:name', userController.getUser);
router.put('/api/user/:name', userController.updateUser);
router.delete('/api/user/:name', userController.deleteUser);

module.exports = router;