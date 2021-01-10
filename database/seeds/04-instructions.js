exports.seed = function(knex, promise) {
  return knex('instructions').insert([
    { step: 1, details: "details, details, details"},
    { step: 2, details: "details, details, details"},
    { step: 3, details: "details, details, details"},
    { step: 4, details: "details, details, details"},
    { step: 5, details: "details, details, details"},
    { step: 6, details: "details, details, details"},
    { step: 7, details: "details, details, details"},
  ])
}