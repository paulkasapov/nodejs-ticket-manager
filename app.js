const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const ticket = require("./routes/ticket.route");

const app = express();
mongoose.connect('mongodb://localhost:27017/ticketsDB', {useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use('/', ticket);

let port = 3030;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

