const mongoose = require("mongoose");

const connect  = () => {    
    return mongoose.connect(
        // "mongodb://127.0.0.1:27017/booklib"
        "mongodb+srv://tejasvini:tejasini1902@cluster0.gzygq.mongodb.net/fileupload"

        );
}

module.exports = connect;