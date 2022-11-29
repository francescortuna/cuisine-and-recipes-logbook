const router = require("express").Router();

const Review = require("../../models/Review");
const withAuth = require("../../utils/auth");

// Create Review
router.post('/', withAuth, async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(200).json(review);

  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router