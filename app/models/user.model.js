module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users',{
        name: {
            type: Sequelize.STRING
        },
        diet: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        picture: {
            type: Sequelize.STRING
        }
    });

    return User;
    
}