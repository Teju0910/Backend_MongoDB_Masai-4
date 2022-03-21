const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName : { type : String, required :true,minlength: 3, maxlength: 30},
        lastName : { type : String, required :true,minlength: 3, maxlength: 30},
        age : { type : Number, required :true},
        email : {type : email, required :true, unique :true},
        profileImages : { type :String, required :true}
    },
    {
         versionKey : false,
         timestamps : true,
    }
)

module.exports = mongoose.model("user", UserSchema);