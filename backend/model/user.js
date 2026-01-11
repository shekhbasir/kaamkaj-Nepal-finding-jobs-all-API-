const mongoose = require("mongoose");

const hamaruser = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    profile: {
      bio: { type: String },
      skill: [{ type: String }],
      resume: { type: String },
      resumeOrgineName: { type: String },
      componey: { type: mongoose.Schema.Types.ObjectId },

      profilePhoto: {
        data: { type: String },       
        contentType: { type: String },
      },
      profileimg: { type: String },

      // New fields
      experience: { type: String },
      education: { type: String },
      github: { type: String },
      linkedin: { type: String },
      website: { type: String },
      address: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      zipcode: { type: String },
      dateOfBirth: { type: String },
      gender: { type: String },
      maritalStatus: { type: String },
      languages: [{ type: String }],
      hobbies: [{ type: String }],
    },
  },
  { timestamps: true }
);

const UserDatabase = mongoose.model("UserDatastore", hamaruser);
module.exports = UserDatabase;
