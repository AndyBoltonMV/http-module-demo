const { Sequelize, DataTypes } = require("sequelize");
const { join } = require("path");

module.exports = {
  db: new Sequelize({
    dialect: "sqlite",
    storage: join(__dirname, "db.sqlite"),
  }),
  DataTypes,
};
