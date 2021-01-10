const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require('../auth/auth-router')
const usersRouter = require('../users/users-router')
const ingredientsRouter = require('../ingredients/ingredientsRouter')
const recipesRouter = require('../recipes/recipes-router')
const instructionsRouter = require('../instructions/instructionsRouter')

const server = express();

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)
server.use("/api/ingredients", validateToken, ingredientsRouter);
server.use("/api/instructions", validateToken, instructionsRouter);


server.get('/', (req, res) => {
  res.json({ api: 'API is up' })
})


module.exports = server