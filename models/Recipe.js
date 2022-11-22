const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recipe extends Model { }

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipe_ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    recipe_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipie_instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cuisine_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "cuisine",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "recipe",
  }
);

module.exports = Recipe;