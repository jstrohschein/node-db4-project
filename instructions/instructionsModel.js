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
  return db("instructions");
}
function findById(id) {
  return db("instructions").where({ id }).first();
}
function findByRecipeId(recipe_id) {
  return db("instructions").where({ recipe_id });
}
async function insert(instruction) {
  const [newInstruction] = await db("instructions").insert(instruction, "*");
  return findByRecipeId(newInstruction.recipe_id);
}
async function update(id, instruction) {
  const [updated] = await db("instructions")
    .where({ id })
    .update(instruction, "*");
  return findByRecipeId(updated.recipe_id);
}
async function remove(id) {
  const [deleted] = await db("instructions").where({ id }).del("*");
  return deleted;
}
