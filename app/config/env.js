const env = {
    database: 'eatit',
    username: 'nn',
    password: 'password',
    host: 'localhost',
    dialect: 'postgres',
    DATABASE_URL: "",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;