module.exports = (sequelize, Sequelize) => {
    const Utensil = sequelize.define("utensils", {
        name: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        }
    });

    return Utensil;
}