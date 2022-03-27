const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        first_name : { type:String, required :true},
        last_name : { type:String, required :true},
        profile_pic :[{ type:String, required :true}],
        // user_pic : { type:String, data: Buffer,required :true}
    },
    {
        versionKey:false,
        timeseries:true,
    }
);

module.exports = mongoose.model("user",userSchema);