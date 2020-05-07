const express = require('express');
const router = express.Router();
const verify = require('../verifyToken');

const ticket_controller = require('../controllers/user.controller');

router.post('/register', ticket_controller.user_create);
router.post('/login', ticket_controller.user_login);
router.post('/token_login', verify, ticket_controller.user_token_login);
router.post('/check_unique_login', ticket_controller.user_check_unique_login);

module.exports = router;