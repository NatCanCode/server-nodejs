const { ingredients } = require('../config/db.config.js');

module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    //Create a new User
    app.post('/users/index', user.create);

    //Retrieve all User
    app.get('/users/index', user.findAll);

    //Retrieve a single User by Pk
    app.get('/users/:userId', user.findByPk);
     
    //Update a User with Id
    app.put('/users/:userId', user.update);

    //Delete a User with Id
    app.delete('/users/:userId', user.delete);
}