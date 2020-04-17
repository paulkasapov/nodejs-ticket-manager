const express = require('express');
const router = express.Router();

const ticket_controller = require('../controllers/user.controller');

router.post('/register', ticket_controller.user_create);
router.post('/login', ticket_controller.user_login);

module.exports = router;