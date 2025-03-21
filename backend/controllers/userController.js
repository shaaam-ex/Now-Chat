const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors.js');
const User = require('../models/User/userModel.js');
const sendToken = require('../utils/jwtToken');
// const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const { Error } = require('mongoose');
const cloudinary = require('cloudinary');

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    // const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
    //     folder: 'avatars',
    //     width: 150,
    //     crop: "scale"
    // });

    const { name, email, password, confirmPassword, phoneNumber } = req.body;

    if(password !== confirmPassword) {
        return res.status(400).json({
            success: false,
            message: 'Passwords don\'t match'
        });
    }

    const exists = await User.findOne({ email });

    if(exists) {
        return res.status(400).json({
            success: false,
            message: 'Email already exists'
        });
    }

    else {
        const user = await User.create({
            name,
            email,
            password,
            phoneNumber
            // avatar: {
            //     public_id: result.public_id,
            //     url: result.secure_url
            // }
        });
    
        const token = user.getJwtToken();
    
        return res.status(200).json({
            success: true,
            message: 'Account Registered Successfully'
        });
    }
});

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Please enter email and password'
        });
    }

    const user = await User.findOne({ email }).select('+password');

    if(!user) {
        return res.status(401).json({
            success: false,
            message: 'Invalid Email or Password'
        });
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched) {
        return res.status(401).json({
            success: false,
            message: 'Invalid Email or Password'
        });
    }

    sendToken(user, 200, res);
});

exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })
})