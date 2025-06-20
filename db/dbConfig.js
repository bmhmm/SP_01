import mysql2 from 'mysql2';

const dbConnection = mysql2.createPool({
user:"SP_01",
password:"SP_01",
host:"localhost",
database:"sp_01",    
connectionLimit: 10
});

// dbConnection.execute("select 'test' ", (err, result)=>{
//     if (err) {
//         console.log(err.message)
//     } else{
//         console.log(result)
//     }
// })
export default dbConnection.promise(); // Return a promise for async/await usage
