const db = require('../../data/db-config.js');

module.exports = {
  getAll,
  add,
  getById,
}

function getAll() {
  return db('project');
}

function getById(id) {
  return db('project').where({ id }).first();
}

function add(project) {
  return db('project').insert(project, 'id');
}

