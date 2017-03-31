
exports.up = (knex) => {
  return knex.schema.createTable('review', (review) => {
    review.increments('id').primary()
    review.integer('stars')
    review.text('body')
    review.integer('farm_id').references('id').inTable('farm').onDelete('cascade')
    review.string('user_id').references('email').inTable('user')
  })
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('review')
};
