const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TicketSchema = new Schema({
    ticketId: {type: Number, required: true},
    number: {type: String, required: true},
    lastUpdatedTime: {type: String, required: true},
    owner: {
        userId: {type: Number, required: true},
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        avatar: {type: String, required: true, default: '../src/assets/default-avatar.png'},
        specialities: [String],
    },
    reportedTime: {type: String, required: true},
    status: {type: String, required: true},
    description: {type: String},
    asset: {
        assetId: {type: Number, required: true},
        name: {type: String, required: true},
        geoCode: {type: String},
        kmFrom: {type: Number},
        kmTo: {type: Number}
    }
});

module.exports = mongoose.model('Ticket', TicketSchema);