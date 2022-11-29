const router = require('express').Router();

const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const recipeRoutes = require("./recipeRoutes");

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use("/recipes", recipeRoutes);

module.exports = router;