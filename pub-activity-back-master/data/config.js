const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: '1234567890wq',
    database: 'inrtu_database',
};

const pool = mysql.createPool(config);

module.exports = pool;
