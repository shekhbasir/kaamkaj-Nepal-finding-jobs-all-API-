
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const UserDatabase=require("../model/user");

const Hamarsignup = async (req, res) => {
  try {
    const { fullname, phoneNumber, role, email, password } = req.body;
    const file = req.file; 

    if (!fullname || !phoneNumber || !role || !email || !password) {
      return res.status(400).json({
        message: "some thing Is Missing ..!",
        success: false,
      });
    }

    const emailbaa = await UserDatabase.findOne({ email });
    if (emailbaa) {
      return res.status(400).json({
        message: "Email Already Exist ..!",
        success: false,
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const saradata = await UserDatabase.create({
      fullname,
      phoneNumber,
      role,
      email,
      password: hashpassword,
      profile: {
        profilePhoto: file
          ? {
              data: file.buffer.toString("base64"),
              contentType: file.mimetype,
            }
          : null,
      },
    });

    const token = jwt.sign(
      { userid: saradata._id },
      process.env.SECRET_KEY,
      { expiresIn: "2d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });

    console.log("FILE =>", req.file);
    saradata.password = undefined;

return res.status(200).json({
  message: "you Signup Successfully ...",
  success: true,
  user: saradata,
});
  } catch (error) {
    console.log("error  from the Signup page ", error);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};



const Hamarlogin = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "something is Missing ..!",
        success: false,
      });
    }

    const emailbaa = await UserDatabase.findOne({ email });
    if (!emailbaa) {
      return res.status(400).json({
        message: "Email Not Found..!",
        success: false,
      });
    }

    if (emailbaa.role !== role) {
      return res.status(400).json({
        message: "Role not matched",
        success: false,
      });
    }

    const comparekar = await bcrypt.compare(password, emailbaa.password);
    if (!comparekar) {
      return res.status(400).json({
        message: "Password Not Match ..!",
        success: false,
      });
    }

    const token = await jwt.sign(
      { userid: emailbaa._id },
      process.env.SECRET_KEY,
      { expiresIn: "2d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });

    emailbaa.password = undefined;

    return res.status(200).json({
      message: "Login Successfully ..!",
      success: true,
      user: emailbaa, 
    });

  } catch (error) {
    console.log("error from the login ", error);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

const Hamarlogout=async(req,res)=>{
  try {
    res.cookie("token","",{httpOnly:true,maxAge:0});
    return res.status(200).json({message:"You Logout Successfully ..!",success:true});
  } catch (error) {
    console.log("error from the Logout ...!");
    res.status(500).json({message:"Server Error",success:false});
  }
}


const ProfileUpdating = async (req, res) => {
  try {
    const userId = req.userId;
    const datamilal = await UserDatabase.findById(userId);

    if (!datamilal) {
      return res.status(400).json({ message: "User not found", success: false });
    }

    if (!datamilal.profile) datamilal.profile = {};

    // Extract fields from body
    const {
      fullname,
      email,
      phoneNumber,
      bio,
      skills,
      experience,
      education,
      github,
      linkedin,
      website,
      address,
      city,
      state,
      country,
      zipcode,
      dateOfBirth,
      gender,
      maritalStatus,
      languages,
      hobbies,
    } = req.body;

    // Convert comma-separated fields to array
    const skillarray = skills ? skills.split(",") : [];
    const languageArray = languages ? languages.split(",") : [];
    const hobbiesArray = hobbies ? hobbies.split(",") : [];

    // Update basic fields
    if (fullname) datamilal.fullname = fullname;
    if (email) datamilal.email = email;
    if (phoneNumber) datamilal.phoneNumber = phoneNumber;
    if (bio) datamilal.profile.bio = bio;
    if (skillarray.length) datamilal.profile.skill = skillarray;
    if (experience) datamilal.profile.experience = experience;
    if (education) datamilal.profile.education = education;
    if (github) datamilal.profile.github = github;
    if (linkedin) datamilal.profile.linkedin = linkedin;
    if (website) datamilal.profile.website = website;
    if (address) datamilal.profile.address = address;
    if (city) datamilal.profile.city = city;
    if (state) datamilal.profile.state = state;
    if (country) datamilal.profile.country = country;
    if (zipcode) datamilal.profile.zipcode = zipcode;
    if (dateOfBirth) datamilal.profile.dateOfBirth = dateOfBirth;
    if (gender) datamilal.profile.gender = gender;
    if (maritalStatus) datamilal.profile.maritalStatus = maritalStatus;
    if (languageArray.length) datamilal.profile.languages = languageArray;
    if (hobbiesArray.length) datamilal.profile.hobbies = hobbiesArray;

    // Handle file upload (image or resume)
    const file = req.file;
    if (file) {
      if (file.mimetype.startsWith("image")) {
        datamilal.profile.profilePhoto = {
          data: file.buffer.toString("base64"),
          contentType: file.mimetype,
        };
      } else {
        datamilal.profile.resume = file.buffer.toString("base64");
        datamilal.profile.resumeOrgineName = file.originalname;
      }
    }

    await datamilal.save();

    return res.status(200).json({
      message: "Profile updated successfully",
      success: true,
      user: datamilal,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

module.exports={Hamarsignup,Hamarlogin,Hamarlogout,ProfileUpdating}
