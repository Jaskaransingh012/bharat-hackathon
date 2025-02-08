const jwt = require("jsonwebtoken");
const User = require("../Models/UserModel");

const JWT_SECRET = process.env.JWT_SECRET || "qwertyuiop";

async function authMiddleware(req, res, next) {
    const authHeader = req.header("Authorization");
    console.log("Authorization Header:", authHeader); // Debugging log

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ Success: false, message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1]; // Extract the token
    console.log("Extracted Token:", token); // Debugging log

    if (!token) {
        return res.status(401).json({ Success: false, message: "Access denied. Token missing." });
    }

    try {
        // Log before verification
        console.log("Verifying Token...");
        
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log("Decoded Token:", decoded);

        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(401).json({ Success: false, message: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        res.status(401).json({ Success: false, message: "Invalid token" });
    }
}

module.exports = authMiddleware;
