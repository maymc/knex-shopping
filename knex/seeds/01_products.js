
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { id: 1, title: 'sunglasses', description: 'protects your eyes', inventory: 22, price: 25.50 },
        { id: 2, title: 'towel', description: 'for drying', inventory: 10, price: 15.22 },
        { id: 3, title: 'water', description: 'hydration', inventory: 5, price: 1.99 }
      ]);
    });
};
