const db = require('../config/db.config.js');
const env = require('../config/env.js');

const Recipe = db.recipes;

//Post a Recipe
exports.create = (request, response) => {
    //Save to MySQL database
    Recipe.create({
        name: request.body.name,
        description: request.body.description,
        image: request.body.image,
        video: request.body.video,
        preparationTime: request.body.preparationTime,
        cookingTime: request.body.cookingTime,
        restTime: request.body.restTime,
        category: request.body.category,
        level: request.body.level,
        season: request.body.season,
        cost: request.body.cost,
        diet: request.body.diet,
        personCount: request.body.personCount,
        userId: request.body.userId
    }).then(recipe => {
        response.send(recipe);
    });
};

//FETCH all Recipes
exports.findAll = (request, response) => {
    Recipe.findAll({
        include: ["users"]
    }).then(recipes => {
        response.send(recipes);
    });
};

//Find a Recipe by Id
exports.findByPk = (request, response) => {
    Recipe.findByPk(request.params.recipeId, {
        include: ["users"]
    }).then(recipe => {
        response.send(recipe);
    });
};

exports.update = (request, response) => {
    const id = request.params.recipeId;
    Recipe.update({
        name: request.body.name,
        description: request.body.description,
        image: request.body.image,
        video: request.body.video,
        preparationTime: request.body.preparationTime,
        cookingTime: request.body.cookingTime,
        restTime: request.body.restTime,
        category: request.body.category,
        level: request.body.level,
        season: request.body.season,
        cost: request.body.cost,
        diet: request.body.diet,
        personCount: request.body.personCount
    }, {
        where: {
            recipeId: id
        }
    }).then(() => {
        response.status(200).send({
            message: 'updated successfully a recipe with id = ' + id
        });
    });
};

//Deleted a Recipe by Id
exports.delete = (request, response) => {
    const id = request.params.recipeId;
    Recipe.destroy({
        where: { recipeId: id }
    }).then(() => {
        response.status(200).send({
            message: 'deleted successfully a recipe with id = ' + id
        });
    });
};