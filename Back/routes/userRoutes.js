const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/api/user/', userController.allUser);
router.put('/api/user/', userController.connexion);
router.post('/api/user/', userController.inscription);
router.get('/api/user/:name', userController.getUser);
//router.put('/api/user/:name', userController.updateUser);
router.delete('/api/user/:name', userController.deleteUser);

module.exports = router;