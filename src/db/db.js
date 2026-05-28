const mongoose = require("mongoose");


async function connectDb() {
    await mongoose.connect("mongodb+srv://karanrana12:zslLKpolhAajuQn8@backend.vqf7vnt.mongodb.net/Posting");

    console.log("Connected to DB");
}


module.exports = connectDb;