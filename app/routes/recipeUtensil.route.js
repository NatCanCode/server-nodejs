module.exports = (app) => {
    const recipeUtensils = require('../controllers/recipeUtensil.controller.js');

    //Create a new recipeUtensil
    app.post('/recipeUtensils/index', recipeUtensils.create);

    //Retrieve all recipeUtensil
    app.get('/recipeUtensils/index', recipeUtensils.findAll);

    //Retrieve a single recipeUtensil by Pk
    app.get('/recipeUtensils/:recipeUtensilId', recipeUtensils.findByPk);
     
    //Update a recipeUtensil with Id
    app.put('/recipeUtensils/:recipeUtensilId', recipeUtensils.update);

    //Delete a recipeUtensil with Id
    app.delete('/recipeUtensils/:recipeUtensilId', recipeUtensils.delete);
}