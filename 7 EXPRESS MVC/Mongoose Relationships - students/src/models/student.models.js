// book Schema ///
const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema(
    {
        roll_id :{ type: Number, required: true },
        // current_batch :{ type: String, required: true },
        batchId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "batch",
            required: true,
        },
        userId : {
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

module.exports = mongoose.model("student", StudentSchema); 
