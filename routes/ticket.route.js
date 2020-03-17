const express = require('express');
const router = express.Router();

const ticket_controller = require('../controllers/ticket.controller');

router.get('/api/tickets', ticket_controller.ticket_read);

module.exports = router;