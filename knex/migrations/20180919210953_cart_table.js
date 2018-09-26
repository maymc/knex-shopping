exports.up = function (knex, Promise) {
  return knex.schema.createTable('cart', function (table) {
    table.increments();
    table.integer('user_id').notNullable();
    table.integer('products_id').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cart');
}