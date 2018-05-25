
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pickups', pickups => {
    pickups.increments('id')
    pickups.text('p_u_line')
    pickups.text('category')
    pickups.integer('success_rate')
    pickups.timestamps(true, true )
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pickups')
};
