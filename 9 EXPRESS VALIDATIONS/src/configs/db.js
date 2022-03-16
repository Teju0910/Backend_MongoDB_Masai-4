const mongoose = require("mongoose");

module.exports = () => {
    console.log("tej")
    return mongoose.connect(
         "mongodb://127.0.0.1:27017/validation"
    );
};
