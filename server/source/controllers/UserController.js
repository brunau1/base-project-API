const Users = require('../models/Users');

async function post(req, res) {
    const userData = {
        'name': req.body.name,
        'role': req.body.role,
        'email': req.body.email,
        'password': req.body.password
    };
    const user = new Users(userData);
    await user.save();
    res.status(201).send({
        message: 'User created'
    });
}

async function get(req, res) {
    try {
        const result = await Users.find({});
        console.log(result)
        res.status(200).send(result);
    } catch (error) {
        console.log(error)
        res.status(404).send({
            message: 'failed to find the data'
        });
    }
}

function put(req, res) {
    const id = req.body.id;
    Users.findById(id, async (err, doc) => {
        if (err) res.status(404).send({
            message: 'User not found'
        });

        doc.name = req.body.name;
        doc.role = req.body.role;
        doc.email = req.body.email;
        doc.password = req.body.password;
        await doc.save();
        res.status(200).send({
            message: 'User updated'
        });
    })
}

async function del(req, res) {
    const id = req.body.id;
    await Users.findByIdAndRemove(id).exec();
    res.status(200).send({
        message: 'user removed'
    });
}  

module.exports = {
    get,
    post,
    put,
    del
}