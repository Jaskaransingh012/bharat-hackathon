const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImageUrl: {
        type: String,
        default:
            'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1734246128~exp=1734249728~hmac=929022529bceefc2aa41c6ff3620b5a3efa37489cab55d29e1a5d8846a937ac3&w=740',
    },
    pincode: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        enum: ['doctor', 'user'],
        default: 'user'
    },
    phoneNumber :{
        type: String,
        required: true,
        unique: true
    },
    animals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Animal" }]
},
    { timestamps: true }
)



const User = mongoose.model('User', userSchema);

module.exports = User;