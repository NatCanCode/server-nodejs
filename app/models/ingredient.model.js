module.exports = (sequelize, Sequelize) => {
    const Ingredient = sequelize.define("ingredients", {
        name: {
            type: Sequelize.STRING
        },
        unit: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
    });

    return Ingredient;
}