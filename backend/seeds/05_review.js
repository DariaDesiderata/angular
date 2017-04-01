
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('review').del()
    .then(() => {
      // Inserts seed entries
      return knex('review').insert([
        {id: 1, stars: 5, body: "Yummy carrots.", farm_id: 1, user_id: "rabbit@gmail.com"},
        {id: 2, stars: 3, body: "The farm too big, i got lost.", farm_id: 1, user_id: "piglet@gmail.com"},
        {id: 3, stars: 3, body: "Tasty honey, but too many bees.", farm_id: 2, user_id: "pooh@gmail.com"},
        {id: 4, stars: 4, body: "I love jumping! Yay!", farm_id: 2, user_id: "tigger@gmail.com"}
      ]);
    });
};
