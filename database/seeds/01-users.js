exports.seed = function(knex, promise) {
  return knex('users').insert([
    {email: 'test1@email.com', username: 'username1', password: 'password1'},
    {email: 'test2@email.com', username: 'username2', password: 'password2'},
    {email: 'test3@email.com', username: 'username3', password: 'password3'},
    {email: 'test4@email.com', username: 'username4', password: 'password4'}
  ])
}