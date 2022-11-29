const sequelize = require('../config/connection');

const { Cuisine, Recipe, User } = require('../models');

const cuisineData = require('./cuisineData.json');
const recipeData = require('./recipeData.json');
const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData);

  const cuisines = await Cuisine.bulkCreate(cuisineData);

  for (const recipe of recipeData) {
    await Recipe.create({
      ...recipe,
      //cuisine_id: cuisines[Math.floor(Math.random() * cuisines.length)].id,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};

seedDatabase();