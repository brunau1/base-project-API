require('dotenv').config();
const config = {
    environment: process.env.ENV || 'developement',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '3003',
    endpoint: process.env.ENDPOINT || '/api/'
}

module.exports = config;