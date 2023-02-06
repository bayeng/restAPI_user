const sql = require('mysql2');
const dbPool = sql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: '',
      database: process.env.DB_NAME,
      
    });

module.exports = dbPool.promise();