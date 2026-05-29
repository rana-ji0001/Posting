const app = require("./src/app");
const connectDb = require("./src/db/db"); // this is called here because this is the best practice to call it here
require("dotenv").config();




connectDb();
app.listen(3000 , () => {
    console.log("App is live on the port number 3000");
})