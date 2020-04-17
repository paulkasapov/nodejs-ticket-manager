const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    firstName: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    lastName: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    avatar: {
        type: String,
        default: '../src/assets/default-avatar.png'
    },
    specialities: [String]
});

module.exports = mongoose.model('User', UserSchema);