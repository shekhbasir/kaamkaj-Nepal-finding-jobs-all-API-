const ComponeyDatabase = require("../model/componey");

// 1️⃣ Register Componey
const componeyRegister = async (req, res) => {
  try {
    const { componeyName } = req.body;
    const userId = req.userId;

    if (!componeyName) {
      return res.status(400).json({
        message: "componey Name Is required ..!",
        success: false
      });
    }

    const baacomp = await ComponeyDatabase.findOne({
      name: { $regex: `^${componeyName}$`, $options: "i" }
    });

    if (baacomp) {
      return res.status(400).json({
        message: "componey already Exist ..!",
        success: false
      });
    }

    const registercomp = await ComponeyDatabase.create({
      name: componeyName,
      description: "",
      location: "",
      userId: userId
    });

    return res.status(200).json({
      message: "componey Register Succesfully ..!",
      success: true,
      registercomp
    });

  } catch (error) {
    console.log("error from the componeyRegister", error);
    return res.status(500).json({
      message: "error from the Componey Signup",
      success: false
    });
  }
};

// 2️⃣ Get all componey of logged-in user
const getallcomponey = async (req, res) => {
  try {
    const userId = req.userId;

    const sabdata = await ComponeyDatabase.find({ userId });

    if (sabdata.length === 0) {
      return res.status(404).json({
        message: "no Componey found by This user",
        success: false
      });
    }

    return res.status(200).json({
      message: "your all componey is here",
      success: true,
      sabdata
    });

  } catch (error) {
    console.log("error from the getallcomponey", error);
    return res.status(500).json({
      message: "error from the get all componey",
      success: false
    });
  }
};

// 3️⃣ Get single componey (only owner)
const getsinglecompony = async (req, res) => {
  try {
    const singleid = req.params.id;

    const databaa = await ComponeyDatabase.findOne({
      _id: singleid,
      userId: req.userId
    });

    if (!databaa) {
      return res.status(404).json({
        message: "data not found by this id",
        success: false
      });
    }

    return res.status(200).json({
      message: "You Single Componey",
      success: true,
      databaa
    });

  } catch (error) {
    console.log("error from the getsinglecompony", error);
    return res.status(500).json({
      message: "error from the getsingle",
      success: false
    });
  }
};

// 4️⃣ Update componey (only owner)
const updatecomponey = async (req, res) => {
  try {
    const { name, description, location, website } = req.body;
    const componeyid = req.params.id;

    const afterupd = await ComponeyDatabase.findOneAndUpdate(
      { _id: componeyid, userId: req.userId },
      { name, description, location, website },
      { new: true }
    );

    if (!afterupd) {
      return res.status(400).json({
        message: "feiled to update Componey",
        success: false
      });
    }

    return res.status(200).json({
      message: "it is updated Successfully",
      success: true,
      afterupd
    });

  } catch (error) {
    console.log("error from the updating componey", error);
    return res.status(500).json({
      message: "error from the updating",
      success: false
    });
  }
};

module.exports = {
  componeyRegister,
  getallcomponey,
  getsinglecompony,
  updatecomponey
};
