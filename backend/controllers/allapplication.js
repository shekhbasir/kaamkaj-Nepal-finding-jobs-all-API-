const { application } = require("express");
const ApplicationDatabase = require("../model/application");
const JobsDatabase = require("../model/jabs");

// ================= APPLY JOB =================
const applyjobs = async (req, res) => {
  try {
    const userid = req.userId;
    const companyid = req.params.id;

    if (!companyid) {
      return res.status(400).json({
        message: "NOoo Jobs Is There with this id",
        success: false
      });
    }

    const pahileapply = await ApplicationDatabase.findOne({
      jobs: companyid,
      applicant: userid
    });

    if (pahileapply) {
      return res.status(400).json({
        message: "You Already Apply ..",
        success: false
      });
    }

    const applydata = await ApplicationDatabase.create({
      jobs: companyid,
      applicant: userid,
      status: "process"
    });

    const job = await JobsDatabase.findById(companyid);
    if (!job) {
      return res.status(400).json({
        message: "Jobs Not Found",
        success: false
      });
    }

    job.application.push(applydata._id);
    await job.save();

    return res.status(200).json({
      message: "You Apply this jobs Successfully ...!",
      success: true
    });

  } catch (error) {
    console.log("this is the error from applyjobs", error);
  }
};

// ================= GET APPLIED JOBS =================
const getappliedjob = async (req, res) => {
  try {
    const userid = req.userId;

    const finddata = await ApplicationDatabase.find({ applicant: userid })
      .populate("jobs");

    if (finddata.length === 0) {
      return res.status(400).json({
        message: "Not Applied By me Any Jobs Now",
        success: false
      });
    }

    return res.status(200).json({
      message: "This all Jobs Applied By Me",
      success: true,
      finddata
    });

  } catch (error) {
    console.log("error from the getapplied Jobs", error);
  }
};

// ================= GET APPLICANTS =================
const getapplicants = async (req, res) => {
  try {
    const jobsid = req.params.id;

    const saraapplicants = await ApplicationDatabase.find({ jobs: jobsid })
      .populate("applicant");

    if (saraapplicants.length === 0) {
      return res.status(400).json({
        message: "no one is applied There",
        success: false
      });
    }

    return res.status(200).json({
      message: "This all are applied in this jobs",
      success: true,
      saraapplicants
    });

  } catch (error) {
    console.log("error from the get applicant", error);
  }
};

// ================= UPDATE STATUS =================
const updatestatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationid = req.params.id;

    if (!status) {
      return res.status(400).json({
        message: "Status is Required",
        success: false
      });
    }

    const findingjobs = await ApplicationDatabase.findById(applicationid);
    if (!findingjobs) {
      return res.status(400).json({
        message: "No jobs Find",
        success: false
      });
    }

    findingjobs.status = status.toLowerCase();
    await findingjobs.save();

    return res.status(200).json({
      message: "Status Updated Successfully",
      success: true
    });

  } catch (error) {
    console.log("error from the update Statuse", error);
  }
};

module.exports = {
  applyjobs,
  getappliedjob,
  getapplicants,
  updatestatus
};
