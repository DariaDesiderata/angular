
exports.up = (knex) => {
  return knex.schema.table('farm', farm => {
    farm.string('img')
  })
};

exports.down = function(knex) {

};
