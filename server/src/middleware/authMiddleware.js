const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    // Get Authorization header
    const authHeader = req.headers.authorization;

    // Check if token exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    // Extract token
    const token = authHeader.split(" ")[1];

    console.log("JWT SECRET EXISTS:", !!process.env.JWT_SECRET);
console.log("TOKEN RECEIVED:", !!token);
    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Store user information in request
    req.user = decoded;

    // Continue to controller
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
  console.log("DECODED TOKEN:", decoded);
};

module.exports = protect;