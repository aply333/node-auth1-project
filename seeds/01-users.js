
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "testUser", password: "testPassword"},
        {username: "testTwo", password: "passwordTwo"}
      ]);
    });
};
