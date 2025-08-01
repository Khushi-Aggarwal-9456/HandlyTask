const mongoose = require("mongoose")
const express = require('express')
var cors = require('cors');

// in above, we are importing mongoose and express 

const app = express() // getting instance of express in app variable
const port = 5000 // 5000, is the port for express server

app.use(cors());

// const databaseURI = "mongodb://localhost:27017/"; // this is MongoDB's URL

const databaseURI = "mongodb+srv://khushiaggarwal9456:khushiaggarwal9456_MONGODB@project.ai3w0qt.mongodb.net/?retryWrites=true&w=majority&appName=project/tasks"; // this is MongoDB's URL

mongoose.connect(databaseURI).then(() => { // this is the function to connect with MongoDB
    console.log("connected to database")
}).catch((err) => {
    console.log("error message : "+err)
});

app.use(express.json()) // middleware to ready values from body of request

// available routes 

app.use("/handlytask/auth", require("./routes/auth")); // this is the parent endpoint for authentication related routes
app.use("/handlytask/tasks", require("./routes/tasks")); // this is the parent endpoint for notes related routes

app.listen(port, () => {
  console.log(`handlytask web-app listening on port ${port}`)
})