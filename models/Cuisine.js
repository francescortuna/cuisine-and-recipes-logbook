const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class Cuisine extends Model { }

Cuisine.init(
    {
      id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true,
     },
      name: {
       type: DataTypes.STRING,
       allowNull: false,  
     },
      description: {
       type: DataTypes.STRING,
       allowNull: false,

     },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Cuisine",
    }
   );

module.exports = Cuisine;
