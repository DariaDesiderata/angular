
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('farm').del()
    .then(() => {
      // Inserts seed entries
      return knex('farm').insert([
        {id: 1, name: 'Sunny Side farm', img: "https://unsplash.com/photos/XKgqZJXxNM4"},
        {id: 2, name: 'Black Ankle farm', img: "https://unsplash.com/photos/sSN3kRQ-TO0"}
      ]);
    });
};
