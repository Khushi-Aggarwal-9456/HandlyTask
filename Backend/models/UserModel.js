const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    email : { 
        type : String,
        required : true,
        unique : true
    },
    password : { 
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    }
});

const User = mongoose.model("User", UserSchema); // creating an User
// User.createIndexes(); // Indexing the User
module.exports = User; // exporting the User