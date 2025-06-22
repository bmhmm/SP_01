import mysql2 from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const dbConnection = mysql2.createPool({
user:process.env.USER,
password:process.env.PASSWORD,
host:"localhost",
database:process.env.DATABASE,    
connectionLimit: 10
});
 

export default dbConnection.promise(); // Return a promise for async/await usage
