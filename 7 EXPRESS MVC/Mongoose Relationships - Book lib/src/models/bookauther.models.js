
 // book Schema ///
 const mongoose = require("mongoose");
 const BookAutherSchema = new mongoose.Schema(
    {
        BookId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "book",
            required: true,
        },
        AutherId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "auther",
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
    }
);

module.exports = mongoose.model("bookauther", BookAutherSchema); 


