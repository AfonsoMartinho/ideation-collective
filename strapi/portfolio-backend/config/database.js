const path = require('path');
const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {

  if(env('NODE_ENV') === 'production') {
    const config = parse(process.env.DATABASE_URL)
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: process.env.DATABASE_URL,
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: {
            rejectUnauthorized: false
          },
        },
        debug: false,
      }, 
    }

  //   return {   
  //     defaultConnection: "default",
  //     connections: {
  //       default: {
  //         connector: "bookshelf",
  //         settings: {
  //           client: "postgres",
  //           host: config.host,
  //           port: config.port,
  //           database: config.database,
  //           username: config.user,
  //           password: config.password,
  //           ssl: {
  //             rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
  //           },     
  //         },
  //         options: {
  //           ssl: env.bool('DATABASE_SSL', false),
  //         },
  //       }
  //     }
  //   }
  }

  return {
    defaultConnection: "default",
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "bank"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "0000"),
        schema: env("DATABASE_SCHEMA", "public"),
      },
    }
  }
};
