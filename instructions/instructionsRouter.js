const router = require("express").Router();
const Instructions = require("./instructionsModel");

router.get("/:id", (req, res) => {
  Instructions.findById(req.params.id)
    .then((ingred) => {
      res.status(200).json(ingred);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.put("/:id", (req, res) => {
  Instructions.update(req.params.id, req.body)
    .then((ingred) => {
      res.status(201).json(ingred);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.delete("/:id", (req, res) => {
  Instructions.remove(req.params.id)
    .then((deleted) => {
      Instructions.findByRecipeId(deleted.recipe_id)
        .then((ingred) => {
          res.status(200).json(ingred);
        })
        .catch((err) => res.status(500).json({ message: err.message }));
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

module.exports = router;
