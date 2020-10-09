const express = require('express');
const server = express();
server.use(express.json());

const helmet = require('helmet');
server.use(helmet());

// import router for other stuff: project, task, resource

// GET request
server.get('/', (req, res) => {
  res.status(200).json({ message: 'Running the server' });
})


module.exports = server;

