function register(req,res){
    res.send("User registered successfully");
}

function login(req,res){
    res.send("User logged in successfully");
}

function checkout(req,res){
    res.send("Checkout successful");
}

export {register, login, checkout};