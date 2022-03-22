// User Schema....//
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    
    {
        first_name :{ type: String, required: true },
        last_name :{ type: String, required: true },
        gender :{
            type: String,
            enum: ["Male","Female","Other"],
             required: true },  
        dateOfBirth :{ type: String, required: true },
        type :{ type: String,
            enum: ["student","admin","instructor"],
             required: true }         
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
    }
);

module.exports = mongoose.model("user", UserSchema); 
