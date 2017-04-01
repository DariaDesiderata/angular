
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('foodcategory').del()
    .then(() => {
      // Inserts seed entries
      return knex('foodcategory').insert([
        {id: 1, name: 'vegetable'},
        {id: 2, name: 'fruit'},
        {id: 3, name: 'other'}
      ]);
    });
};
