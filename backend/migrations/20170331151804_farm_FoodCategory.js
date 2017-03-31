exports.up = (knex) => {
  return knex.schema.createTable('farm_FoodCategory', (farm_FoodCategory) => {
    farm_FoodCategory.integer('farm_id').references('id').inTable('farm')
    farm_FoodCategory.integer('category_id').references('id').inTable('foodcategory')
  })

};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('farm_FoodCategory')
};
