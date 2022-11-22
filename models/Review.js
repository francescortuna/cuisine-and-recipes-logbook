const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');


class Review extends Model { }

Review.init(
     {
        id: 
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,    
        },

        reviewerName:
        {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: true,
        },

        reviewerScore:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },

        reviewDecription:
        {
            type: DataTypes.TEXT,
            allowNull: true,
            autoIncrement: true,
        },

        recipe_id: 
        {
            type: DataTypes.INTEGER,
            references: {
              model: "recipe",
              key: "id",
            },
          },
        },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "Review",
    }
    );

    module.exports = Review;