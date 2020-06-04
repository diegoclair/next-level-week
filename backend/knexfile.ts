import path from 'path';

//to run the migrations:
//  npx knex --knexfile knexfile.ts migrate:latest
//  the (knexfile.ts) is the file of knexfile.ts, in this case is the root path

//we can use npm script for run the command too

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true,
};