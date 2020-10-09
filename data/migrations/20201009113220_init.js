
exports.up = function(knex) {
  return knex.schema
  .createTable('resource', tbl => {
    tbl.increments();   // unique id
    tbl.string('resource_name').notNullable().unique();    // unique, required name 
    tbl.string('resource_description');
  })
  .createTable('project', tbl => {
    tbl.increments();   // pk
    tbl.string('project_name').notNullable();
    tbl.string('project_description');
    tbl.boolean('project_completed').notNullable();
  })
  .createTable('task', tbl => {
    tbl.increments();
    tbl.string('task_description').notNullable();
    tbl.string('notes');
    tbl.boolean('task_completed').notNullable();

    // foreign key to project
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('project')
      .onUpdate('CASCADE')
  })
  .createTable('project_resource', tbl => {
    tbl.increments();
    
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('project')
      .onUpdate('CASCADE')

    tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resource')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('task')
    .dropTableIfExists('project')
    .dropTableIfExists('resource')
};
