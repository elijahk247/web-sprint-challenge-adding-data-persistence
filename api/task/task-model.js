const db = require('../../data/db-config.js');

module.exports = {
  getAll,
  add,
  getById,
}

function getAll() {
  return db('task');
}

function getById(id) {
  return db('task').where({ id }).first();
}

function add(resource) {
  return db('task').insert(resource, 'id');
}
