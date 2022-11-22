const Cuisine = require("./Cuisine");
const Recipe = require("./Recipe");
const Review = require("./Review");

Cuisine.hasMany(Recipe, {
  foreignKey: "cuisine_id",
  onDelete: "CASCADE",
});

Recipe.belongsTo(Cuisine, {
  foreignKey: "cuisine_id"
});

Recipe.hasMany(Review, {
  foreignKey: "recipe_id",
  onDelete: "CASCADE",
})

Review.belongsTo(Recipe, {
  foreignKey: "recipe_id",
})

module.exports = { Cuisine, Recipe, Review }