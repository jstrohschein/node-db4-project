const db = require("../database/db");

module.exports = {
  find,
  findById,
  findByRecipeId,
  insert,
  update,
  remove,
};

function find() {
  return db("ingredients");
}
function findById(id) {
  return db("ingredients").where({ id }).first();
}
function findByRecipeId(recipe_id) {
  return db("ingredients").where({ recipe_id });
}
async function insert(ingredient) {
  const [newIngredient] = await db("ingredients").insert(ingredient, "*");
  return findByRecipeId(newIngredient.recipe_id);
}
async function update(id, ingredient) {
  const [updated] = await db("ingredients")
    .where({ id })
    .update(ingredient, "*");
  return findByRecipeId(updated.recipe_id);
}
async function remove(id) {
  const [deleted] = await db("ingredients").where({ id }).del("*");
  return deleted;
}
