const Cuisine = require("./cuisine");
const Recipe = require("./recipe");
const Review = require("./review");
const User = require("./User");

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
});

Review.belongsTo(Recipe, {
  foreignKey: "recipe_id",
});

User.hasMany(Recipe, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Recipe.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { Cuisine, Recipe, Review, User }