// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5000,
      user: "Jared",
      database: "Secret-family-recipes-back-end",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,

    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};
