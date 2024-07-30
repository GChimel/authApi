const knex = require('knex')({
  client: 'pg', // type of database
  connection: {
    host: '127.0.0.1', // database host
    user: process.env.DATABASE_USER, // database user
    password: process.env.DATABASE_PASSWORD, // database password
    database: 'authApi', // name of database
  },
});

module.exports = knex;
