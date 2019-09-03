var Users = require('../models/Users');

function post(req, res) {
    const userData = {
        'nome': req.body.nome,
        'type': req.body.type,
        'email': req.body.email,
        'password': req.body.password
    };

    var user = new Users(userData);
    user.save();

    res.status(201).send({
        message: 'User created'
    });
}

function get(req, res) {
    try {
        const result = Users.find({});
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send({
            message: 'failed to find the data'
        });
    }
}

function edit(req, res) {
    
}

router.get('/edit', function (req, res, next) {
    res.render('edit');
});

router.post('/edit', function (req, res, next) {
    var id = req.body.id;

    Contatos.findById(id, function (err, doc) {
        if (err) {
            console.error('error, no entry found');
        }
        doc.nome = req.body.nome;
        doc.email = req.body.email;
        doc.telefone = req.body.telefone;
        doc.save();
    })
    res.redirect('/');
});

router.get('/delete', function (req, res, next) {
    res.render('delete');
});

router.post('/delete', function (req, res, next) {
    var id = req.body.id;
    Contatos.findByIdAndRemove(id).exec();
    res.redirect('/');
});  