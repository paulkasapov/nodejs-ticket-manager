const Ticket = require('../models/ticket.model');

exports.ticket_read = function (req, res) {
    Ticket.find({}, function (err, ticket) {
        if(err) res.sendStatus(500).send(err);
        res.send(ticket);
    })
};