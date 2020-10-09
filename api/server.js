const express = require('express');
const server = express();
server.use(express.json());

const helmet = require('helmet');
server.use(helmet());

// import router for other stuff: project, task, resource
const ProjectRouter = require('./project/project-router.js');
const ResourceRouter = require('./resource/resource-router.js');
const TaskRouter = require('./task/task-router.js');

// GET request
server.get('/', (req, res) => {
  res.status(200).json({ message: 'Running the server' });
})

// the imported routers
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);

module.exports = server;

