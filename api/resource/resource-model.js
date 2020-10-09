const db = require('../../data/db-config.js');

module.exports = {
  getAll,
  add,
  getById,
}

function getAll() {
  return db('resource');
}

function getById(id) {
  return db('resource').where({ id }).first();
}

function add(resource) {
  return db('resource').insert(resource, 'id');
}
