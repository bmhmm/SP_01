import dbConnection from '../db/dbConfig.js';
import bcrypt from 'bcrypt';
import statuscode from 'http-status-codes';




async function register(req,res){
    const{username, firstname, lastname,email, password} =req.body;

    if(!username || !firstname || !lastname || !email || !password){
    return res.status(statuscode.BAD_REQUEST).json({msg:"please provide all required fields"})

    }

    try {

  const [user] = await dbConnection.query("select username, userid from users where username =? or email = ?", [username, email]);
//   return res.json({user: user})
  if(user.length>0){
    return res.status(statuscode.BAD_REQUEST).json({msg:"User already registered "});
  }
  if(password.length < 6){
    return res.status(statuscode.BAD_REQUEST).json({msg:"Password must be at least 6 characters long"});
  }

        const salt =await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);

        const query = "INSERT INTO users (username, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)";
        const values = [username, firstname, lastname, email, hashedpassword];
        await dbConnection.execute(query, values);
        res.status(statuscode.CREATED).json({msg:"User registered successfully"});
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(statuscode.INTERNAL_SERVER_ERROR).json({msg:"Internal server error"});
    }
}

async function login(req,res){
    res.send("User logged in successfully");
}

async function checkout(req,res){
    res.send("Checkout successful");
}

export {register, login, checkout};


// try{
//      await dbConnection.query("INSERT INTO users(username, firstname, lastname, email, password) VALUES(?,?,?,?,?)", [])
// }
// catch(error){
//     console.log('error message:', error.message);
// }