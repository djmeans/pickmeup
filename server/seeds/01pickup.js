
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pickups').del()
    .then(function () {
      // Inserts seed entries
      return knex('pickups').insert([
        {
          p_u_line: 'Baby are your feet tired? Because you have been running through my mind all day',
          category: 'classic',
          success_rate: 90
        },
        {
          p_u_line: 'How much does a polar bear weigh? Enough to break the ice',
          category: 'cute',
          success_rate: 72
        },
        {
          p_u_line: 'Are you a beaver? Because dam!',
          category: 'cute',
          success_rate: 81
        },
        {
          p_u_line: 'Do you think sex offenders should be forced to identify themselves? Hi, my name is Brevon Good',
          category: 'creepy',
          success_rate: 0
        },
        {
          p_u_line: 'Is that a mirror in your pocket? Because I could see myself in those pants.',
          category: 'raunchy',
          success_rate: 53
        }
      ]);
    });
};
