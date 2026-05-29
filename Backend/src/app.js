const express = require("express");
const app = express();
const multer = require('multer');
const uploadFile = require("./services/storage.services")
const postModel = require("./model/post.model");
app.use(express.json());


const upload = multer({storage:multer.memoryStorage()});


//1st api to create post on the server
app.post("/create-post", upload.single("image"),async (req,res) => { //"image" is the key name here that we are sending in the form data of the post request


    console.log(req.body);
    console.log(req.file);
    const result = await uploadFile(req.file.buffer);
    const post = await postModel.create({
        image: result.url,
        caption : req.body.caption
    });
    res.status(201).json({ //using 201 because something is created 
        message:"Post created successfully",
        post
    });

});

//2nd api get(/posts) to get the all the posts from the server
app.get("/posts" , async(req,res) => {
    const post = await postModel.find();
    res.status(200).json({
        message:"Post fetched successfully",
        post
    });

})



module.exports = app;
