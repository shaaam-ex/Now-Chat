const express = require('express');
const errorMiddleware = require('./middleware/error');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');

dotenv.config({ path: 'backend/config/config.env' });

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Import all routes
const user = require('./routes/User/userRoutes');

app.use('/api', user);

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;