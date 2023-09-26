const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'chamdom44',
    password: 'Chamdom410*',
    database: 'DB_WS'
})

module.exports = pool