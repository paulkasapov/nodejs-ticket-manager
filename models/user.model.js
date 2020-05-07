const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        max: 20,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 20,
        min: 6
    },
    firstName: {
        type: String,
        required: true,
        max: 20,
        min: 3
    },
    lastName: {
        type: String,
        required: true,
        max: 20,
        min: 3
    },
    avatar: {
        type: String,
        default: '../src/assets/default-avatar.png'
    },
    specialities: {
        type: Array,
        items: {
            type: String
        }
    }
});

module.exports = mongoose.model('User', UserSchema);