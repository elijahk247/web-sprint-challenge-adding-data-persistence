const db = require('../../data/db-config.js');

module.exports = {
  getAll,
  add,
  getById,
}

function getAll() {
  return db('task')
    .select('task.id',
      'task.task_description',
      'task,task_completed',
      'project.project_name',
      'project.project_description'
    )
    .join('project', 'project.id', 'task.project_id');
}

function getById(id) {
  return db('task').where({ id }).first();
}

function add(resource) {
  return db('task').insert(resource, 'id');
}
