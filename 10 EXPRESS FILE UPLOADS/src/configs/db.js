const mongoose = require("mongoose");


module.exports = () =>{
    return mongoose.connect(
      //  "mongodb://127.0.0.1:27017/fileupload";
        "mongodb+srv://tejasvini:tejasini1902@cluster0.gzygq.mongodb.net/fileupload"
    );

};