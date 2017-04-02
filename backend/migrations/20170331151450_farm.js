
exports.up = (knex) => {
  return knex.schema.createTable('farm', (farm) => {
    farm.increments('id').primary()
    farm.string('name')
  })

};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('farm')
};
