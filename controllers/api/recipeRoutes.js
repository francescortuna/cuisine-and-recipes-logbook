const router = require("express").Router();

const Recipe = require("../../models/Recipe");
const withAuth = require("../../utils/auth");

// Create Recipe
router.post("/", withAuth, async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
