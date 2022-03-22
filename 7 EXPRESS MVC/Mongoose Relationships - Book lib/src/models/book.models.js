// book Schema ///
const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema(
    {
        book_name :{ type: String, required: true },
        book_body :{ type: String, required: true },
        // sectionId : {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "section",
        //     required: true,
        // },
        autherId : {
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

module.exports = mongoose.model("book", BookSchema); 
