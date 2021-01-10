const router = require("express").Router();
const Ingredients = require("../ingredients/ingredientsModel");
const Instructions = require("../instructions/instructionsModel");
const Recipes = require("./recipeModel");

router.get("/", (req, res) => {
  Recipes.find()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});
router.get("/:id", (req, res) => {
  Recipes.findById(req.params.id)
    .then((recipe) => {
      Ingredients.findByRecipeId(recipe.id)
        .then((ingred) => {
          Instructions.findByRecipeId(recipe.id)
            .then((inst) => {
              res
                .status(200)
                .json({ ...recipe, ingredients: ingred, instructions: inst });
            })
            .catch((err) => res.status(500).json({ message: err.message }));
        })
        .catch((err) => res.status(500).json({ message: err.message }));
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.post("/user/:id", (req, res) => {
  const newRecipe = { ...req.body, user_id: req.params.id };
  Recipes.insert(newRecipe)
    .then((recipes) => {
      res.status(201).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});
router.get("/user/:id", (req, res) => {
  Recipes.findByUserId(req.params.id)
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.put("/:id", (req, res) => {
  Recipes.update(req.params.id, req.body)
    .then((recipes) => {
      res.status(201).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});
router.delete("/:id", (req, res) => {
  Recipes.remove(req.params.id)
    .then(() => {
      Recipes.findByUserId(req.user.id)
        .then((recipes) => {
          res.status(200).json(recipes);
        })
        .catch((err) => {
          res.status(500).json({ message: err.message });
        });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});
router.post("/:id/ingredients", (req, res) => {
  const newIngredient = { ...req.body, recipe_id: req.params.id };
  Ingredients.insert(newIngredient)
    .then((ingred) => {
      res.status(201).json(ingred);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.post("/:id/instructions", (req, res) => {
  const newInstruction = { ...req.body, recipe_id: req.params.id };
  Instructions.insert(newInstruction)
    .then((inst) => {
      res.status(201).json(inst);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

module.exports = router;
