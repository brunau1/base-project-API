const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: String,
    type: String,
    email: {type: String, required: true},
    password: String
}, {collection: 'users'});

const Users = model('Users', UserSchema);
module.exports = Users;