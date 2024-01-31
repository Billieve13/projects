// Update with your config settings.
require('dotenv').config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const connectionString = process.env.DB_CONNECT_STRING;
module.exports = {

  development: {
    client: 'pg', //postgresql
    connection: connectionString//{
      //host: '127.0.0.1',
      //password: 'docker',
      //user: 'postgres',
      //port: 5432
      //database: 'pet_store'
    //}
    //'postgresql://postgres:docker@localhost/pg-docker'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
