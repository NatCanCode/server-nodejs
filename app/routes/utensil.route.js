module.exports = (app) => {
    const utensils = require('../controllers/utensil.controller.js');

    //Create a new utensil
    app.post('/utensils/index', utensils.create);

    //Retrieve all utensil
    app.get('/utensils/index', utensils.findAll);

    //Retrieve a single Utensil by Pk
    app.get('/utensils/:utensilId', utensils.findByPk);
     
    //Update a utensil with Id
    app.put('/utensils/:utensilId', utensils.update);

    //Delete a utensil with Id
    app.delete('/utensils/:utensilId', utensils.delete);
}