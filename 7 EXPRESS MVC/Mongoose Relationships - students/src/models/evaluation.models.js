
 // book Schema ///
 const mongoose = require("mongoose");
 
 const EvaluationSchema = new mongoose.Schema(
    {    
        date_of_evaluation :{ type: String, required: true },
        UserId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        BatchId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "batch",
            required: true,
        },
},
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
    }
);

module.exports = mongoose.model("evaluation", EvaluationSchema); 


