const express = require('express');
const { registerUser, loginUser, getUserDetails } = require('../../controllers/userController');
const { isAuthenticatedUser } = require('../../middleware/auth');

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/me').get(isAuthenticatedUser, getUserDetails);

module.exports = router;