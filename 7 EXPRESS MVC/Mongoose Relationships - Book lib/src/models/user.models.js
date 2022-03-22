// User Schema....//
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    
    {
        first_name :{ type: String, required: true },
        last_name :{ type: String, required: true },  
        // role :{ type: String, required: true },              
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
    }
);

module.exports = mongoose.model("user", UserSchema); 
