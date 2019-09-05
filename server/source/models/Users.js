const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String
}, {collection: 'users'});

const Users = model('Users', UserSchema);
module.exports = Users;