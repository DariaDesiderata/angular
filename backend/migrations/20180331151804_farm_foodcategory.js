exports.up = (knex) => {
  return knex.schema.createTable('farm_foodcategory', (farm_foodcategory) => {
    farm_foodcategory.integer('farm_id').references('id').inTable('farm')
    farm_foodcategory.integer('category_id').references('id').inTable('foodcategory')
  })

};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('farm_foodcategory')
};
