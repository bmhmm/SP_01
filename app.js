import express from 'express';
const app = express();

const port = 1225;


//User router middleware
import userRouter from './Route/userRoutes.js'

app.use('/api/users', userRouter)


//importing  dbconnection
import dbConnection from './db/dbConfig.js';

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
});

async function start(){
    try{
        
       const result = await dbConnection.execute("select 'test' ");
        //  app.listen(port,()=>{
        // console.log(`server is running on port ${port}`);
        //  });
       console.log('Database connection established');
       
    } 
    catch(err){
        console.log(err.message);
    }

}
start();




// app.listen(port,(err)=>{
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log(`server is running on port ${port}`)
//     }
// })