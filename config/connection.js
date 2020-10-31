/* eslint-disable indent */
const Sequelize = require("sequelize");

const sequelize = new Sequelize("sequelize_library", "root", "M@v3r!ck19", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;