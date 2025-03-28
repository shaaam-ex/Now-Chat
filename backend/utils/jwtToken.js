// Create token and saving in cookie

const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();

    // options for cookie

    const options = {
        expire: new Date(
                Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 // to milliseconds
            ),
        httpOnly: true,
        path: '/'
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        user,
        token
    })
    
}


module.exports = sendToken;