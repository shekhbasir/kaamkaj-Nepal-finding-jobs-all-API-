const multer = require("multer");

const storage = multer.memoryStorage();

const singleupload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, 
}).single("file");

module.exports = singleupload;
