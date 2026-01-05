
const JobsDatabase = require("../model/jabs");


const postjobs = async (req, res) => {
  try {
    const {
      title,
      description,
      requirment,
      salary,
      location,
      jobtype,
      experience,
      position,
      companyId
    } = req.body;

    const userid = req.userId;

    if (!title || !salary || !location || !position) {
      return res.status(400).json({
        message: "some feild is missing",
        success: false
      });
    }

    const hamarjobs = await JobsDatabase.create({
      title,
      description: description,
      salary,
      requirement: requirment,
      location,
      jobsTypes: jobtype,
      Noofposition: position,
      experience: experience,
      createdby: userid,
      componey: companyId
    });

    if (!hamarjobs) {
      return res.status(400).json({
        message: "feiled to post the jobs",
        success: false
      });
    }

    return res.status(200).json({
      message: "You successfully posted Your Jobs",
      success: true,
      hamarjobs
    });

  } catch (error) {
    console.log(error, "error from the posting the jobs");
    return res.status(500).json({
      message: "server error",
      success: false
    });
  }
};


const getalljobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
        { jobsTypes: { $regex: keyword, $options: "i" } },
        { location: { $regex: keyword, $options: "i" } },
      ]
    };

    const milaljobs = await JobsDatabase.find(query).sort({ createdAt: -1 });

    if (milaljobs.length === 0) {
      return res.status(404).json({
        message: "Jobs Not Found ..!",
        success: false
      });
    }

    return res.status(200).json({
      message: "Your Jobs Is Ready ...!",
      success: true,
      milaljobs
    });

  } catch (error) {
    console.log("error from the geting all jobs ..!", error);
    return res.status(500).json({
      message: "server error",
      success: false
    });
  }
};

module.exports = {
  postjobs,
  getalljobs
};
