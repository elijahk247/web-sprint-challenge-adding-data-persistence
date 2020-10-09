const express = require('express');
const router = express.Router();

const db = require('../../data/db-config.js');
const Resource = require('./resource-model.js');

// GET all resources, /api/resources
router.get('/', (req, res) => {
  Resource.getAll()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not retrieve the resources' });
    })
})

// POST 
router.post('/', (req, res) => {
  const data = req.body;

  Resource.add(data)
    .then(resource => {
      res.status(201).json({ message: 'Created new resource' });
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to create new resource' });
    })
})

module.exports = router;