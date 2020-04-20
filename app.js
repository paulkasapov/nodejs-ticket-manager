const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ticket = require("./routes/ticket.route");
const user = require('./routes/user.route');
require('dotenv').config();

const app = express();

let dev_db_url = 'mongodb://localhost:27017/TicketsApi';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/tickets', ticket);
app.use('/api/users', user);

let port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

