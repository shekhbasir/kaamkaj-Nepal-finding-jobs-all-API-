
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const UserDatabase=require("../model/user");

const Hamarsignup = async (req, res) => {
  try {
    const { fullname, phoneNumber, role, email, password } = req.body;
    const file = req.file; // profile photo

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
    return res.status(200).json({
      message: "you Signup Successfully ...",
      success: true,
    });

  } catch (error) {
    console.log("error  from the Signup page ", error);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};


//lets go to the  task 

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

    // ✅ ADD ONLY (flow same)
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

    // ✅ ADD ONLY (user untouched)
    emailbaa.password = undefined;

    return res.status(200).json({
      message: "Login Successfully ..!",
      success: true,
      user: emailbaa, // SAME RESPONSE
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
    const { fullname, email, phoneNumber, bio, skill } = req.body;
    const file = req.file; // profile photo

    let skillarray = [];
    if (skill) {
      skillarray = skill.split(",");
    }

    const userId = req.userId;

    const datamilal = await UserDatabase.findById(userId);
    if (!datamilal) {
      return res.status(400).json({
        message: "Data not found",
        success: false,
      });
    }

    if (!datamilal.profile) {
      datamilal.profile = {};
    }

    if (fullname) datamilal.fullname = fullname;
    if (email) datamilal.email = email;
    if (phoneNumber) datamilal.phoneNumber = phoneNumber;
    if (bio) datamilal.profile.bio = bio;
    if (skillarray.length) datamilal.profile.skill = skillarray;

    // 🔥 FILE UPDATE (only add)
    if (file) {
      datamilal.profile.profilePhoto = {
        data: file.buffer.toString("base64"),
        contentType: file.mimetype,
      };
    }

    await datamilal.save();

    return res.status(200).json({
      message: "Profile Updating Successfully ...!",
      success: true,
    });

  } catch (error) {
    console.log("error from the Profile Update ", error);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

module.exports={Hamarsignup,Hamarlogin,Hamarlogout,ProfileUpdating}
