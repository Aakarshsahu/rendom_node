const mongoose = require("mongoose");
const userModel = mongoose.Schema({
    unique_id : String,
    part_code : String,
    name : String,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }
    
})

module.exports = mongoose.model("user",userModel);


