const sequelize = require('../config/connection');

const { Cuisine, Recipe } = require('../models');

const cuisineData = require('./cuisineData.json')
const recipeData = require('./recipeData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const cuisines = await Cuisine.bulkCreate(cuisineData);

  for (const recipe of recipeData) {
    await Recipe.create({
      ...recipe,
      cuisine_id: cuisines[Math.floor(Math.random() * cuisines.length)].id,
    });
  }
  process.exit(0);
};

seedDatabase();