// Using Node.js `require()`
const mongoose = require('mongoose')
const env = require("dotenv").config()

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.4dz6syt.mongodb.net/userDetail`;
mongoose.connect(URI);

const connection = (mongoose.connection, ()=> {
    console.log("db connected..!");
    
});


module.exports = connection; 
