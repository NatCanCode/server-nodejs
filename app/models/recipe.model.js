module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define('recipes',{
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        video: {
            type: Sequelize.STRING
        },
        preparationTime: {
            type: Sequelize.STRING
        },
        cookingTime: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        },
        level: {
            type: Sequelize.STRING
        },
        season: {
            type: Sequelize.STRING
        },
        cost: {
            type: Sequelize.INTEGER
        },
        diet: {
            type: Sequelize.STRING
        },
        personCount: {
            type: Sequelize.INTEGER
        }
    });

    return Recipe;
    
}