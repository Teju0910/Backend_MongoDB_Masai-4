const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://tejasvini:tejasini1902@cluster0.gzygq.mongodb.net/fileupload");
}