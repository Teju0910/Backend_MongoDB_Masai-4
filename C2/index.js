const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const database = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/bank")
}

// User Schema...//

const UserSchema = new mongoose.Schema(
    {
    firstName : { type: String, require:true},
    middleName :String,
    lastName : { type: String, require:true},
    age : { type: Number, require:true},
    email : { type: String, require:true},
    address : { type: String, require:true},
    gender :{ type: String, default: 'Female'},
    type :{ type: String, default: 'customer '},
    },
    {
        versionKey :false,
        timestamps =
    }
)


app.listen(5010, async() =>{
    try{
        console.log("Runing on port 5001")  
        await database()
        console.log("Ended on port 5001")  
    }
   catch(err){
       console.log(err);
   } 
})