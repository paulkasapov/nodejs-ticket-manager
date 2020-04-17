const express = require('express');
const router = express.Router();

const ticket_controller = require('../controllers/ticket.controller');

router.get('/', ticket_controller.ticket_read);
router.post('/add', ticket_controller.ticket_create);

module.exports = router;