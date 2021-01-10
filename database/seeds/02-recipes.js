exports.seed = function(knex, promise) {
  return knex('recipes').insert([
    { title: 'recipe1', source: 'source1', category: ['cat1', 'cat2', 'cat3'], image: 'ImageLink'},
    { title: 'recipe2', source: 'source2', category: ['cat1', 'cat2', 'cat3'], image: 'ImageLink'},
    { title: 'recipe3', source: 'source3', category: ['cat1', 'cat2', 'cat3'], image: 'ImageLink'},
    { title: 'recipe4', source: 'source4', category: ['cat1', 'cat2', 'cat3'], image: 'ImageLink'},
    { title: 'recipe5', source: 'source5', category: ['cat1', 'cat2', 'cat3'], image: 'ImageLink'},
    { title: 'recipe6', source: 'source6', category: ['cat1', 'cat2', 'cat3'], image: 'ImageLink'},
    { title: 'recipe7', source: 'source7', category: ['cat1', 'cat2', 'cat3'], image: 'ImageLink'},
  ])
}