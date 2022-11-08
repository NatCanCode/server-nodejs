const { ingredients } = require('../config/db.config.js');

module.exports = (app) => {
    const ingredient = require('../controllers/ingredient.controller.js');

    //Create a new Ingredient
    app.post('/ingredients/index', ingredient.create);

    //Retrieve all Ingredient
    app.get('/ingredients/index', ingredient.findAll);

    //Retrieve a single Ingredient by Pk
    app.get('/ingredients/:ingredientId', ingredient.findByPk);
     
    //Update a Ingredient with Id
    app.put('/ingredients/:ingredientId', ingredient.update);

    //Delete a Ingredient with Id
    app.delete('/ingredients/:ingredientId', ingredient.delete);
}