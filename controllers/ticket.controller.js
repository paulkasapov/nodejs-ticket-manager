const Ticket = require('../models/ticket.model');
const {ticketValidation} = require('../validation');

exports.ticket_read = function (req, res) {
    Ticket.find({}, function (err, ticket) {
        if (err) res.sendStatus(404).send(err);
        res.send(ticket);
    })
};

exports.ticket_create = async (req, res) => {

    const {error} = ticketValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

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
    } catch (err) {
        return res.sendStatus(400).send(err)
    }
};

exports.ticket_delete = function (req, res) {
    Ticket.deleteOne({ticketId : req.params.id}, function (err) {
        if (err) return res.sendStatus(404).send({...err});
        res.send('Deleted successfully!');
    })
};