const express = require("express");
const app = express();
const multer = require('multer');
const uploadFile = require("./services/storage.services")
app.use(express.json());


const upload = multer({storage:multer.memoryStorage()});


//1st api to create post on the server
app.post("/create-post", upload.single("image"),async (req,res) => { //"image" is the key name here that we are sending in the form data of the post request


    console.log(req.body);
    console.log(req.file);
    const result = await uploadFile(req.file.buffer);
    console.log(result);

})



module.exports = app;
