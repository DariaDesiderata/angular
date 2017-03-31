
exports.up = (knex) => {
  return knex.schema.createTable('foodcategory', (foodcategory) => {
    foodcategory.increments('id').primary
    foodcategory.string('name')
  })

};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('foodcategory')
};
