const mysql = require('mysql2')
require('dotenv').config({ path: '.env.local' })

const{SQL_HOST,SQL_PORT,SQL_USER,SQL_PW,SQL_DB} = process.env;
const conn = mysql.createPool({
        host : SQL_HOST,
        port : SQL_PORT,
        user : SQL_USER,
        password : SQL_PW,
        database : SQL_DB
    });


module.exports = conn.promise() ;