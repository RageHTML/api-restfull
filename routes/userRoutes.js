const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.post('/', controller.createUser);
router.post('/', controller.getAllUsers);
router.post('/', controller.getUser);
router.post('/', controller.updateUser);
router.post('/', controller.deleteUser);

module.exports = router;