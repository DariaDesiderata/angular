
exports.up = (knex) => {
  return knex.schema.table('product', product => {
    product.string('img')
  })
};

exports.down = function(knex, Promise) {

};
