// Section Schema....//
const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema(
    {
        name :{ type: String, required: true },
        BookAutherId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "bookauther",
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
    }
);

module.exports = mongoose.model("section", SectionSchema)
