// http://expressjs.com/en/resources/middleware/multer.html

const path = require("path");
// console.log(path)
const multer = require("multer");
const req = require("express/lib/request");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, path.join(__dirname,"../my-uploads"))
    },
    filename: function (req, file, callback) {
      const uniquePrefix = Date.now();
      callback(null,uniquePrefix +"-" + file.originalname)
    }
  })
  

  function fileFilter (req, file, callback) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        // To accept the file pass `true`, like so:
        callback(null, true);
      } else {
        // To reject this file pass `false`, like so:
        callback(new Error("Incorrect mime type"), false);
      }
  }


  const upload = multer({
      storage,
      fileFilter,
       limits: {
    fileSize: 1024 * 1024 * 5,
  },})

  module.exports = upload
  