require("dotenv").config();
const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;


const connectMongodb = async () => {
   return await mongoose.connect(MONGO_URL)
}


module.exports = {
   connectMongodb
}