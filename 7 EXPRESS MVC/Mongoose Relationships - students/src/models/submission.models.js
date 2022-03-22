// Section Schema....//
const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema(
    {
        marks :{ type: Number, required: true },
        EvaluationId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "evaluation",
            required: true,
        },
        StudentId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student",
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
    }
);

module.exports = mongoose.model("submission", SubmissionSchema)
