const mongoose = require('mongoose');
const dbconnect = mongoose.connect
const accessString = 'mongodb+srv://admin:admin@devcluster-2ascx.mongodb.net/test?retryWrites=true&w=majority';
module.exports = { 
    dbconnect, 
    accessString
};