exports.up = (knex) => {
  return knex.schema.createTable('product', (product) => {
    product.increments('id').primary()
    product.string('name')
    product.integer('quantity')
    product.integer('price')
    product.string('uom')
    product.integer('category_id').references('id').inTable('foodcategory').onDelete('cascade')
  })

};

exports.down = (knex) => {
 return knex.schema.dropTableIfExists('product')
};
