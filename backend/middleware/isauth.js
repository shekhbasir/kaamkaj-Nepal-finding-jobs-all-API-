const jwt = require('jsonwebtoken');

const isauth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Token not found, please login",
        success: false
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token, login again",
        success: false
      });
    }

    req.userId = decoded.userid;

    next();

  } catch (error) {
    console.log("error from the token verification ", error);
    return res.status(401).json({
      message: "Authentication failed",
      success: false
    });
  }
};

module.exports = isauth;
