// Auther Schema ///
const mongoose = require("mongoose");
const BatchSchema = new mongoose.Schema(
    {
        batch_name : { type: String, required: true},
        // StudentId : {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "user",
        //     required: true,
        // },
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
    }
);

 module.exports = mongoose.model("batch", BatchSchema); 
