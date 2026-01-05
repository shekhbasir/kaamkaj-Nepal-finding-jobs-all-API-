const mongoose = require("mongoose");

const hamarcomponey = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  logo: {
    type: String
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserDatastore",
    required: true
  }
}, { timestamps: true });

const ComponeyDatabase = mongoose.model("Componeydatastore", hamarcomponey);
module.exports = ComponeyDatabase;
