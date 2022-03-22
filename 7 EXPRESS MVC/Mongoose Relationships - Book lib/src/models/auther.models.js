// Auther Schema ///
const mongoose = require("mongoose");
const AutherSchema = new mongoose.Schema(
    {
        UserId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
    }
);

 module.exports = mongoose.model("auther", AutherSchema); 
