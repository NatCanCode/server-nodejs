module.exports = (app) => {
    const steps = require('../controllers/step.controller.js');

    //Create a new Step
    app.post('/steps/index', steps.create);

    //Retrieve all Step
    app.get('/steps/index', steps.findAll);

    //Retrieve a single Step by Pk
    app.get('/steps/:stepId', steps.findByPk);
     
    //Update a Step with Id
    app.put('/steps/:stepId', steps.update);

    //Delete a Step with Id
    app.delete('/steps/:stepId', steps.delete);
}