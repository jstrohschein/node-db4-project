const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  insert,
  findByUsername,
};

function find() {
  return db("users").select("id", "username", "email");
}

function findById(id) {
  return db("users").where({ id }).first();
}

async function insert(user) {
  const [newUser] = await db("users").insert(user, "*");
  return newUser;
}

function findByUsername(username) {
  return db("users").where({ username }).first();
}
