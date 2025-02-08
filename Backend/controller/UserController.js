const User = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || "qwertyuiop"; // Use environment variable in production


async function registerUser(req, res) {
    try {
        // 1. Validate required fields
        const requiredFields = ['name', 'email', 'password', 'phoneNumber', 'pincode'];
        const missingFields = requiredFields.filter(field => !req.body[field]);

        if (missingFields.length > 0) {
            return res.status(400).json({
                Success: false,
                message: `Missing required fields: ${missingFields.join(', ')}`
            });
        }

        // 2. Destructure values
        const { name, email, password, phoneNumber, role, pincode } = req.body;

        // 3. Check for existing user
        const existingUser = await User.findOne({ $or: [{ email }, { phoneNumber }] });
        if (existingUser) {

            return res.status(409).json({
                Success: false,
                message: "User already exists with this email or phone number"
            });
        }

        // 4. Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 5. Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            phoneNumber,
            role,
            pincode
        });

        // 6. Save user to database
        const savedUser = await newUser.save();

        // 7. Generate JWT Token
        const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, { expiresIn: '7d' });

        // 8. Remove sensitive data from response
        const userResponse = savedUser.toObject();
        delete userResponse.password;

        res.status(201).json({
            Success: true,
            message: "User registered successfully",
            user: userResponse,
            token
        });

    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({
            Success: false,
            message: "Internal server error",
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}


async function loginUser(req, res) {
    try {
        const { emailOrPhone, password } = req.body;
        if (!emailOrPhone || !password) {
            return res.status(400).json({ Success: false, message: "Email/Phone and Password are required" });
        }

        const user = await User.findOne({
            $or: [{ email: emailOrPhone }, { phoneNumber: emailOrPhone }]
        });

        if (!user) {
            return res.status(404).json({ Success: false, message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ Success: false, message: "Invalid credentials" });
        }

        // **Check if JWT_SECRET is available**
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is missing in environment variables");
        }

        // **Generate JWT Token**
        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            Success: true,
            message: "Login successful",
            token,
            user: { ...user.toObject(), password: undefined } // Remove password from response
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            Success: false,
            message: "Internal server error"
        });
    }
}


module.exports = {
    registerUser,
    loginUser
};
