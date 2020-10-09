const express = require('express');
const router = express.Router();

const db = require('../../data/db-config.js');
const Task = require('./task-model.js');

// GET all tasks, /api/tasks
router.get('/', (req, res) => {
  Project.getAll()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not retrieve the tasks' });
    })
})

// POST 
router.post('/', (req, res) => {
  const data = req.body;

  Tasks.add(data)
    .then(project => {
      res.status(201).json({ message: 'Created new tasks' });
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to create new tasks' });
    })
})

module.exports = router;