const mongoose = require("mongoose");
const catModel = mongoose.Schema({
    catname : String, 
    id : String,
})

module.exports = mongoose.model("cat",catModel);


