const db = require('../config/db.config.js');
const env = require('../config/env.js');

const Ingredient = db.ingredients;

//Post a Ingredient
exports.create = (request, response) => {
    //Save to MySQL database
    Ingredient.create({
        name: request.body.name,
        unit: request.body.unit,
        image: request.body.image,
        recipeId: request.body.recipeId
    }).then(ingredient => {
        response.send(ingredient);
    });
};

//FETCH all Ingredients
exports.findAll = (request, response) => {
    Ingredient.findAll().then(ingredients => {
        response.send(ingredients);
    });
};

//Find a Ingredient by Id
exports.findByPk = (request, response) => {
    Ingredient.findByPk(request.params.ingredientId).then(ingredient => {
        response.send(ingredient);
    });
};

exports.update = (request, response) => {
    const id = request.params.ingredientId;
    Ingredient.update({
        name: request.body.name,
        unit: request.body.unit,
        image: request.body.image
    }, {
        where: {
            ingredientId: id
        }
    }).then(() => {
        response.status(200).send({
            message: 'updated successfully a ingredient with id = ' + id
        });
    });
};

//Deleted a Ingredient by Id
exports.delete = (request, response) => {
    const id = request.params.ingredientId;
    Ingredient.destroy({
        where: { ingredientId: id }
    }).then(() => {
        response.status(200).send({
            message: 'deleted successfully a ingredient with id = ' + id
        });
    });
};