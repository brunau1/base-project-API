const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    nome: String,
    tipo: String,
    email: {type: String, required: true},
    senha: String
}, {collection: 'users'});

const Users = model('Users', UserSchema);
module.exports = Users;