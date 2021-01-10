
exports.up = function(knex) {
  return knex.schema

    .createTable('users', t  => {
      t.increments()
      t.string('username', 128).notNullable().unique()
      t.string('email', 128).notNullable().unique()
      t.string('password', 128).notNullable()
    })

    .createTable('recipes', t => {
      t.increments()
      t.string('title', 128).notNullable()
      t.string('source', 128)
      tbl.string("category").notNullable();
      tbl.string("image");
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("instructions", (tbl) => {
      tbl.increments();
      tbl.integer("step").notNullable();
      tbl.string("details").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });

};


exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
    .dropTableIfExists("users");
};
