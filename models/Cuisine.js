const { Model, DataTypes } = require('sequalize');
const sequalize = require('../config/connection');


Cuisine.init(
    {
      id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,

     },
      name: {
       type: DataTypes.STRING,
       allowNull: false,  
     },
      description: {
       type: DataTypes.STRING,
       allowNull: false,

     },
    },
   );

Model.exports = Cuisine;
