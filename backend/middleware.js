const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");//used to retrieve value of authorization header from incoming request

  if (!authHeader) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  const tokenArray = authHeader.split(" ");
  
  if (tokenArray.length !== 2 || tokenArray[0].toLowerCase() !== "bearer") {
    return res.status(401).json({ message: "Invalid token format." });
  }

  const token = tokenArray[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // Attach the user ID to the request for future use
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token." });
  }
};

module.exports = verifyToken;
