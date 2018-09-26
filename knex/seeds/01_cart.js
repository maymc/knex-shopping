
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cart').del()
    .then(function () {
      // Inserts seed entries
      return knex('cart').insert([
        { id: 1, user_id: 10, products_id: 111 },
        { id: 2, user_id: 20, products_id: 222 },
        { id: 3, user_id: 30, products_id: 333 }
      ]);
    });
};
