
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, email: 'mickey@disney.com', password: 'mouse' },
        { id: 2, email: 'minnie@disney.com', password: 'mickey' },
        { id: 3, email: 'donald@disney.com', password: 'duck' }
      ]);
    });
};
