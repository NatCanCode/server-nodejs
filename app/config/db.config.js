const env = require('./env.js');

// Development environment
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(env.database, env.username, env.password, {
//     host: env.host,
//     dialect: env.dialect,
//     operatorsAliases: false,

//     pool: {
//         max: env.pool.max,
//         min: env.pool.min,
//         acquire: env.pool.acquire,
//         idle: env.pool.idle
//     }
// });

// Production environment
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        // Certificat pour le https
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const db = {};
//importation des constantes créés au dessus
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require('../models/user.model.js')(sequelize, Sequelize);
db.recipes = require('../models/recipe.model.js')(sequelize, Sequelize);
db.ingredients = require('../models/ingredient.model.js')(sequelize, Sequelize);
db.utensils = require('../models/utensil.model.js')(sequelize, Sequelize);
db.steps = require('../models/step.model.js')(sequelize, Sequelize);
db.recipeIngredients = require('../models/recipeIngredient.model.js')(sequelize, Sequelize);
db.recipeUtensils = require('../models/recipeUtensil.model.js')(sequelize, Sequelize);
// db.favorites = require('../models/favorite.model.js')(sequelize, Sequelize);

// User -> Recipe
db.users.hasMany(db.recipes, { as: "recipes" });
db.recipes.belongsTo(db.users, {
    foreignKey: "userId",
    as: "users"
});

// Ingredient <- RecipeIngredient -> Recipe
db.ingredients.belongsToMany(db.recipes, { through: "recipeIngredients" });
db.recipes.belongsToMany(db.ingredients, { through: "recipeIngredients" });

db.ingredients.hasMany(db.recipeIngredients);
db.recipeIngredients.belongsTo(db.ingredients);

db.recipes.hasMany(db.recipeIngredients);
db.recipeIngredients.belongsTo(db.recipes);

// Step -> Recipe
db.recipes.hasMany(db.steps, { as: "steps" });
db.steps.belongsTo(db.recipes, {
    foreignKey: "recipeId",
    as: "recipes"
});

// Utensil <- RecipeUtensil -> Recipe

db.utensils.belongsToMany(db.recipes, { through: "recipeUtensils" });
db.recipes.belongsToMany(db.utensils, { through: "recipeUtensils" });

db.utensils.hasMany(db.recipeUtensils);
db.recipeUtensils.belongsTo(db.utensils);

db.recipes.hasMany(db.recipeUtensils);
db.recipeUtensils.belongsTo(db.recipes);


//Junction User <- Favorite -> Recipe
db.users.belongsToMany(db.recipes, { through: "favorites", foreignKey: 'userId', as: "users" });

//module d'export
module.exports = db;