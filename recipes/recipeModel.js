const db = require("../database/db");

module.exports = {
  find,
  findByUserId,
  findById,
  insert,
  update,
  remove,
};

function find() {
  return db("recipes");
}

function findByUserId(user_id) {
  return db("recipes").where({ user_id });
}
function findById(id) {
  return db("recipes").where({ id }).first();
}
async function insert(recipe) {
  const [newRecipe] = await db("recipes").insert(recipe, "*");
  return findByUserId(newRecipe.user_id);
}
async function update(id, recipe) {
  const [updatedRecipe] = await db("recipes").where({ id }).update(recipe, "*");
  return findByUserId(updatedRecipe.user_id);
}
async function remove(id) {
  return db("recipes").where({ id }).del();
}
