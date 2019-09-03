const express = require('express');
const cors = require('cors');
const routes = require('./source/routes/routes');
const config = require('./source/config/config');
const app = express();

app.use(cors());
app.use(express.json());
app.use(config.endpoint, routes);

module.exports = app;