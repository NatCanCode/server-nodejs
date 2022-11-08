const db = require('../config/db.config.js');
const env = require('../config/env.js');

const User = db.users;

//Post a User
exports.create = (request, response) => {
    //Save to MySQL database
    User.create({
        name: request.body.name,
        diet: request.body.diet,
        password: request.body.password,
        email: request.body.email,
        picture: request.body.picture
    }).then(user => {
        response.send(user);
    });
};

//FETCH all Users
exports.findAll = (request, response) => {
    User.findAll().then(users => {
        response.send(users);
    });
};

//Find a User by Id
exports.findByPk = (request, response) => {
    User.findByPk(request.params.userId).then(user => {
        response.send(user);
    });
};

exports.update = (request, response) => {
    const id = request.params.ingredientId;
    User.update({
        name: request.body.name,
        diet: request.body.diet,
        password: request.body.password,
        email: request.body.email,
        picture: request.body.picture
    }, {
        where: {
            userId: id
        }
    }).then(() => {
        response.status(200).send({
            message: 'updated successfully a user with id = ' + id
        });
    });
};

//Deleted a User by Id
exports.delete = (request, response) => {
    const id = request.params.userId;
    User.destroy({
        where: { userId: id }
    }).then(() => {
        response.status(200).send({
            message: 'deleted successfully a user with id = ' + id
        });
    });
};