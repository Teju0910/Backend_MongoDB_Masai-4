const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
    {
        body : { type : String, required :true},
    },
    {
         versionKey : false,
         timestamps : true,
    }
)

module.exports = mongoose.model("publications", CommentSchema);