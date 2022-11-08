const db = require('../config/db.config.js');
const env = require('../config/env.js');

const Utensil = db.utensils;

//Post an Utensil
exports.create = (request, response) => {
    //Save to MySQL database
    Utensil.create({
        name: request.body.name,
        image: request.body.image
    }).then(utensil => {
        response.send(utensil);
    });
};

//FETCH all Utensils
exports.findAll = (request, response) => {
    Utensil.findAll().then(utensils => {
        response.send(utensils);
    });
};

//Find an Utensil by Id
exports.findByPk = (request, response) => {
    Utensil.findByPk(request.params.utensilId).then(utensil => {
        response.send(utensil);
    });
};

exports.update = (request, response) => {
    const id = request.params.utensilId;
    Utensil.update({
        name: request.body.name,
        image: request.body.image
    }, {
        where: {
            utensilId: id
        }
    }).then(() => {
        response.status(200).send({
            message: 'updated successfully an utensil with id = ' + id
        });
    });
};

//Deleted an Utensil by Id
exports.delete = (request, response) => {
    const id = request.params.utensilId;
    Utensil.destroy({
        where: { utensilId: id }
    }).then(() => {
        response.status(200).send({
            message: 'deleted successfully an utensil with id = ' + id
        });
    });
};