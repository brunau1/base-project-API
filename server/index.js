const application = require('./app');
const config = require('./source/config/config');

application.listen(config.port, () => {
    console.log(`Server listening on ${config.host}:${config.port}${config.endpoint}...`);
});