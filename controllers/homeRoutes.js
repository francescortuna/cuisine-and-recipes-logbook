const router = require('express').Router();
const { Cuisine, Recipe } = require('../models');

//Get all Cuisines
router.get('/', async (req, res) => {
  try {
    const cuisineData = await Cuisine.findAll();

    // Serialize data so the template can read it
    const cuisines = cuisineData.map((cuisine) => cuisine.get({ plain: true }));
    res.render('homepage', { 
      cuisines, 
      logged_in: req.session.logged_in,
        user_id: req.session.user_id
    });

    //res.status(200).json(cuisineData);

  } catch (err) {
    res.status(500).json(err);
  }

});

//Get all recipes for a given cuisine id
router.get('/cuisine/:id', async (req, res) => {
  try {
    const cuisineData = await Cuisine.findByPk(req.params.id, {
      include: [{ model: Recipe }],
    });

    // Serialize data so the template can read it
    const cuisine = cuisineData.get({ plain: true });
    res.render('recipe', { 
      cuisine,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id
    }); 
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/'); // Redirects to home/cuisine page if user is logged in
    return;
  }
  res.render('login');
});

module.exports = router;
