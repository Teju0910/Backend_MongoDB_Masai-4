const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const database = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/bank")
}

// User Schema...//

// const UserSchema = new mongoose.Schema(
//     {   
//     firstName : { type: String, require:true},
//     // middleName :String,
//     lastName : { type: String, require:true},
//     age : { type: Number, require:true},
//     email : { type: String, require:true},
//     address : { type: String, require:true},
//     gender :{ type: String, default: 'Female'},
//     type :{ type: String, default:'customer'},
//     },
//     {
//         versionKey :false,
//         timestamps : true,
//     }
// );

// const User = mongoose.model("user",UserSchema);


// // Branch Schema...//

// const BranchSchema = new mongoose.Schema(
//     {
//     name : { type: String, require:true},
//     address : { type: String, require:true},
//     IFSC : { type: String, require:true},
//     MICR : { type: Number, require:true},
//     },
//     {
//         versionKey :false,
//         timestamps : true,
//     }
// );

// const Branch = mongoose.model("branch",BranchSchema)

// // Macter Schema...//

// const MasterSchema = new mongoose.Schema(
//     {
//         balance : { type: Number, require:true},
//     },
//     {
//         versionKey :false,
//         timestamps : true,
//     }
// );


// // SavingAccount Schema...//

// const SavingAccountSchema = new mongoose.Schema(
//     {
//     account_number : { type: String, require:true, unique: true},
//     balance : { type: Number, require:true},
//     interestRate  : { type: Number, require:true},
//     },
//     {
//         versionKey :false,
//         timestamps : true,
//     }
// );

// const SavingAccount = mongoose.model("Saving",SavingAccountSchema);


// // SavingAccount Schema...//

// const FixedAccountSchema = new mongoose.Schema(
//     {
//     account_number : { type: String, require:true, unique: true},
//     balance : { type: Number, require:true},
//     interestRate  : { type: Number, require:true},
//     startDate  : { type: Date, require:true},
//     maturityDate  : { type: Date, require:true},
//     },
//     {
//         versionKey :false,
//         timestamps : true,
//     }
// );

// const FixedAccount = mongoose.model("Fixed",FixedAccountSchema)

app.listen(8010, async() => {
    try{
        console.log("Runing on port 5001")  
        await database()
        // console.log("Ended on port 5001")  
    }
   catch(err){
       console.log(err);
   } 
})