const mongoose = require("mongoose");

const PublicationsSchema = new mongoose.Schema(
    {
        content : { type : String, required :true},
    },
    {
         versionKey : false,
         timestamps : true,
    }
)

module.exports = mongoose.model("publications", PublicationsSchema);