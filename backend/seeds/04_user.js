
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(() => {
      // Inserts seed entries
      return knex('user').insert([
        {
          email: 'rabbit@gmail.com',
          name: 'Rabbit'
        },
        {
          email: 'piglet@gmail.com',
          name: 'Piglet'
        },
        {
          email: 'pooh@gmail.com',
          name: 'Pooh'
        },
        {
          email: 'tigger@gmail.com',
          name: 'Tigger'
        }
      ]);
    });
};
