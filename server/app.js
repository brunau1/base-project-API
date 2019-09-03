const express = require('express');
const cors = require('cors');
const { dbconnect, accessString } = require('./source/database/index')
const routes = require('./source/routes/routes');
const config = require('./source/config/config');
const app = express();

const start = async () => {

    await dbconnect(accessString, {useNewUrlParser: true});
    app.use(cors());
    app.use(express.json());
    app.use(config.endpoint, routes);
    return app;
}
start();

module.exports = app;