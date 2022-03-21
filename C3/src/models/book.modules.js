const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
    {
        likes : { type : Number, required :true},
        content : { type : String, required :true},
        coverImage : { type :String, required :true}
    },
    {
         versionKey : false,
         timestamps : true,
    }
)

module.exports = mongoose.model("book", BookSchema);