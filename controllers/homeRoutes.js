const router = require('express').Router();
const { Cuisine, Recipe, Review } = require('../models');

const withAuth = require("../utils/auth");

//Get all Cuisines
router.get('/', withAuth, async (req, res) => {
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
router.get('/cuisine/:id', withAuth, async (req, res) => {
  try {
    const cuisineData = await Cuisine.findByPk(req.params.id);
    const cuisine = cuisineData.get({ plain: true });
    
    const recipeData = await Recipe.findAll(
      {
      where: {
        cuisine_id: req.params.id
      }
      },
      {
        include: [
          {
            model: Cuisine,
            attribute: ['name']
          }
        ]
      }
    );

    // Serialize data so the template can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    res.render('recipe', { 
      cuisine,
      recipes,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id
    }); 
    //res.status(200).json(recipeData);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/review/:id', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id);
    const recipe = recipeData.get({ plain: true });
    res.render("review", {
      recipe, 
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all reviews for a given recipe id
router.get('/allreviews/:id', withAuth, async (req,res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id);
    const recipe = recipeData.get({ plain: true });

    const reviewData = await Review.findAll(
      {
        where: {
          recipe_id: req.params.id
        }
      },
      {
        include: [
          {
            model: Recipe,
            attribute: ['name']
          }
        ]
      }
    )

    const reviews = reviewData.map((review) => review.get({ plain: true }));
    res.render("allreviews", {
      reviews,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    })
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/addrecipe", withAuth, (req, res) => {
  if (req.session.logged_in) {
    res.render("addrecipe", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
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
