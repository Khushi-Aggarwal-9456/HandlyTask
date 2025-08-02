// this is the middleware, we executes it when we need authentication token for either login or signup

const jwt = require("jsonwebtoken");

const JWT_SIGN = "handlytask"; // this is the JWT SIGN, use to generate Token of logged user

const FetchUser =(req, res, next) => {

    // fetching the user ID from JWT token and appending it to the req object

    const token = req.header("auth-token"); // fetching token from header of req

    if(!token) 
        res.send(401).json({ err : "Authenticate with correct credentials" });
        // sending the not found error, when the token not found

    try{
        const data = jwt.verify(token, JWT_SIGN); // verifying the token and JWT_SIGN to get logged user token
        req.user = data.user; // assigning the data.user to req.user
        next(); // calling the function, which is just next to middleware functiom
    }catch(err){
        res.send(401).json({ err : "Authenticate with correct credentials" });
    }
}

module.exports = FetchUser;