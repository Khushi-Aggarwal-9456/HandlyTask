const mongoose = require("mongoose");
const { Schema } = mongoose;

const TasksSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    title : {
        type : String, 
        required : true
    },
    description : {
        type : String,
        required : true
    }, 
    status : {
        type : String,
        required : true
    }, 
    priority : {
        type : String,
        required : true
    }, 
    duedate : {
        type : Date,
        required : true,
        default : Date.now
    },
    assignedto : {
        type : String,
        required : true
    }, 
});

module.exports = mongoose.model("Tasks", TasksSchema);