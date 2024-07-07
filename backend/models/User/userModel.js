const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [30, 'Your name cannot exceed 30 characters'],
        minLength: [4, 'Your name must be at least 4 characters long'],
    },

    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email address'],
    },

    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minLength: [6, 'Your password must be at least 6 characters long'],
        select: false,
    },

    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date
});


UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
})

// JWT Token
UserSchema.methods.getJwtToken = function () {
    // Generating token
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
}

// Compare user password
UserSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

// Generate Password reset token
UserSchema.methods.getResetPasswordToken = function () {
    // Generate Token
    const resetToken = crypto.randomBytes(20).toString('hex');

    // Hash and set to resetPasswordToken
    this.resetPasswordToken = crypto.createHash('sha256')
                                    .update(resetToken)
                                    .digest('hex');

    // Set token expire time
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;

    return resetToken;
}

module.exports = mongoose.model('User', UserSchema);