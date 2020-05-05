const express = require('express');
const router = express.Router();
const verify = require('../verifyToken');

const ticket_controller = require('../controllers/ticket.controller');

router.get('/', verify, ticket_controller.ticket_read);
router.post('/add', verify, ticket_controller.ticket_create);
router.delete('/delete/:id', verify, ticket_controller.ticket_delete);

module.exports = router;