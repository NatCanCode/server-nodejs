module.exports = (app) => {
    const recipes = require('../controllers/recipe.controller.js');

    //Create a new Recipe
    app.post('/recipes/index', recipes.create);

    //Retrieve all Recipes
    app.get('/recipes/index', recipes.findAll);

    //Retrieve a single Recipe by Pk
    app.get('/recipes/:recipeId', recipes.findByPk);
     
    //Update a Recipe with Id
    app.put('/recipes/:recipeId', recipes.update);

    //Delete a Recipe with Id
    app.delete('/recipes/:recipeId', recipes.delete);
}