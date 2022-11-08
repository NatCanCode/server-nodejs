const db = require('../config/db.config.js');
const env = require('../config/env.js');

const RecipeUtensil = db.recipeUtensils;

//Post the amount of Recipe Utensil
exports.create = (request, response) => {
    //Save to MySQL database
    RecipeUtensil.create({
        amount: request.body.amount,
        recipeId: request.body.recipeId,
        utensilId: request.body.utensilId
    }).then(recipeUtensil => {
        response.send(recipeUtensil);
    });
};

//FETCH all amount of Recipe Utensil
exports.findAll = (request, response) => {
    RecipeUtensil.findAll({
        include: ["recipe", "utensil"]
    }).then(recipeUtensil => {
        response.send(recipeUtensil);
    });
};

//Find an amount of Recipe Utensil by Id
exports.findByPk = (request, response) => {
    RecipeUtensil.findByPk(request.params.recipeUtensilId, {
        include: ["recipe", "utensil"]
    }).then(recipeUtensil => {
        response.send(recipeUtensil);
    });
};

exports.update = (request, response) => {
    const id = request.params.recipeUtensilId;
    RecipeUtensil.update({
        amount: request.body.amount
    }, {
        where: {
            recipeUtensilId: id
        }
    }).then(() => {
        response.status(200).send({
            message: 'updated successfully an amount of recipe utensil with id = ' + id
        });
    });
};

//Deleted an amount of Recipe Utensil by Id
exports.delete = (request, response) => {
    const id = request.params.recipeUtensilId;
    RecipeUtensil.destroy({
        where: { recipeUtensilId: id }
    }).then(() => {
        response.status(200).send({
            message: 'deleted successfully an amount of recipe utensil with id = ' + id
        });
    });
};