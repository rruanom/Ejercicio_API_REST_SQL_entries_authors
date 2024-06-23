const {Pool} = require('pg');

 const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    database: 'postgres',
    password: '123456'
}); 

/* const pool = new Pool({
    host: 'dpg-cpor3iqju9rs738umkjg-a.frankfurt-postgres.render.com',
    user: 'demo_node_sql_user',
    password: 'J6dJ1UoHwACz5LmInmhS26WlTXWcJypg',
    database: 'demo_NODE_SQL',
    port: '5432',
    ssl: {
        rejectUnauthorized: false
    }
}); */
module.exports = pool;