exports.seed = function(knex, promise) {
  return knex('ingredients').insert([
    { name: "Ingredient1"},
    { name: "Ingredient2"},
    { name: "Ingredient3"},
    { name: "Ingredient4"},
    { name: "Ingredient5"},
    { name: "Ingredient6"},
    { name: "Ingredient7"},
  ])
}