module.exports = (sequelize, Sequelize) => {
    const RecipeUtensil = sequelize.define("recipeUtensils", {
        recipeUtensil: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
        amount: {
            type: Sequelize.INTEGER
        },
        recipeId: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            references: {
                model: 'recipes',
                key: 'recipeId'
              },
        },
        utensilId: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            references: {
                model: 'utensils',
                key: 'utensilId'
              },
        }
    });

    return RecipeUtensil;
}