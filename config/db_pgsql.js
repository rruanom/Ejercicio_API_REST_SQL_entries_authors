const {Pool} = require('pg');

/* const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    database: 'postgres',
    password: '123456'
}); */

const pool = new Pool({
    host: 'dpg-cpor3iqju9rs738umkjg-a',
    user: 'demo_node_sql_user',
    port: '5432',
    database: 'postgres://demo_node_sql_user:J6dJ1UoHwACz5LmInmhS26WlTXWcJypg@dpg-cpor3iqju9rs738umkjg-a.frankfurt-postgres.render.com/demo_node_sql',
    password: 'J6dJ1UoHwACz5LmInmhS26WlTXWcJypg'
});

module.exports = pool;