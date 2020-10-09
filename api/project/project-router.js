const express = require('express');
const router = express.Router();

const db = require('../../data/db-config.js');
const Project = require('./project-model.js');

// GET all projects, /api/projects
router.get('/', (req, res) => {
  Project.getAll()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not retrieve the projects' });
    })
})

// POST 
router.post('/', (req, res) => {
  const data = req.body;

  Project.add(data)
    .then(project => {
      res.status(201).json({ message: 'Created new project' });
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to create new project' });
    })
})

module.exports = router;