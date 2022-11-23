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

        reviewer_name:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },

        reviewer_score:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        review_description:
        {
            type: DataTypes.TEXT,
            allowNull: true,
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
        modelName: "review",
    }
    );

    module.exports = Review;