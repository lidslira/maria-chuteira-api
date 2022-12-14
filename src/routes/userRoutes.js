const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.post('/registration', controller.newUser)
router.get('/search', controller.getAllUsers)
router.delete('/delete/:id', controller.deleteUser)
router.post('/login', controller.login)


module.exports = router

