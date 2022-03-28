const { default: mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title  : {type :String, required:true},
        userid : {type : mongoose.Schema.Types.ObjectId, ref:"user", required:true}
    },
    {
        versionKey:false,
        timestamp : true,
    }  
)

module.exports = mongoose.model("todo", todoSchema)