const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI, {

        })    
        // console.log("MongoDB Connected")
    } 
    catch (err) {
        console.error("MongoDB Connection Failed:", err);
    }
}

module.exports = connectDB