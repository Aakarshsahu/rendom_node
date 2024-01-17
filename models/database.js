const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL).then(function(){
    console.log("DATABSE IS CONNECTED SUCCESSFULLY");
}).catch(function(){
    console.log(error);
})