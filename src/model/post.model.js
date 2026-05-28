const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    image: String, //this image is converted into url form by cloud service provider
    caption: String,
});


const postModel = mongoose.model("post", postSchema) //here "post" is the name of the collection

module.exports = postModel;

/* 
POST = {
image: String,
caption: String


}
user = {
username: String,
email: String,
password : String,
post: [post1, post2, post3]


here user and post are the collections inside the database



}




*/