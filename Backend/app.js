const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const connectToDb = require("./db/db");

dotenv.config();
app.use(cors());

connectToDb();

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;