module.exports = (sequelize, Sequelize) => {
    const RecipeIngredient = sequelize.define("recipeIngredients", {
        recipeIngredient_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
        amount: {
            type: Sequelize.DOUBLE,
        },
        recipeId: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            foreignKey: true,
            references: {
                model: 'recipes',
                key: 'recipeId'
              },
        },
        ingredientId: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            foreignKey: true,
            references: {
                model: 'ingredients',
                key: 'ingredientId'
              },
        }
    });

    return RecipeIngredient;
}