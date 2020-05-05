const Ticket = require('../models/ticket.model');

exports.ticket_read = function (req, res) {
    Ticket.find({}, function (err, ticket) {
        if (err) res.sendStatus(500).send(err);
        res.send(ticket);
    })
};

exports.ticket_create = async (req, res) => {
    let ticket = new Ticket(
        {
            ticketId: req.body.ticketId,
            number: req.body.number,
            lastUpdatedTime: req.body.lastUpdatedTime,
            owner: {
                userId: req.body.owner.userId,
                firstName: req.body.owner.firstName,
                lastName: req.body.owner.lastName,
                avatar: req.body.owner.avatar,
                specialities: req.body.owner.specialities
            },
            reportedTime: req.body.reportedTime,
            status: req.body.status,
            description: req.body.description,
            asset: {
                assetId: req.body.asset.assetId,
                name: req.body.asset.name,
                geoCode: req.body.asset.geoCode,
                kmFrom: req.body.asset.kmFrom,
                kmTo: req.body.asset.kmTo
            }
        }
    );
    try {
        const savedTicket = await ticket.save();
        res.send(savedTicket)
    } catch (e) {
        return res.sendStatus(400).send(e)
    }
};

exports.ticket_delete = function (req, res) {
    Ticket.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.sendStatus(500).send({...err});
        res.send('Deleted successfully!');
    })
};