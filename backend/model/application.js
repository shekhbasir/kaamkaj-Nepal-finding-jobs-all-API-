const mongoose = require("mongoose");

const hamarapplication = new mongoose.Schema({
  jobs: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "JobsDatabase"
  },
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserDatabase"
  },
  status: {
    type: String,
    enum: ["accepted", "rejected", "process"],
    default: "process"
  }
}, { timestamps: true });

const ApplicationDatabase = mongoose.model(
  "ApplicationDatabase",
  hamarapplication
);

module.exports = ApplicationDatabase;
