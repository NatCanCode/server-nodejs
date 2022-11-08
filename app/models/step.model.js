module.exports = (sequelize, Sequelize) => {
    const Step = sequelize.define("steps", {
        number: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return Step;
}