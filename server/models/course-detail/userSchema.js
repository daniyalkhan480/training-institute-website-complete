const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Example: "John Doe"
    email: { type: String, required: true, unique: true }, // Example: "john.doe@example.com"
    password: { type: String, required: true }, // Hashed password
    roles: {
        type: [String],
        enum: ['instructor', 'student', 'admin'],
        default: ['student'], // Default role
    },
    username: { type: String, required: true, unique: true }, // Example: "johndoe"
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const User = mongoose.model("User", userSchema);

module.exports = User;