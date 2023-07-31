import mysql from 'mysql'
//creating connection pool to database
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'vivoroot458%',
    database: 'mymess',
    multipleStatements: true, // Enable multi-statements

});

export default db;
