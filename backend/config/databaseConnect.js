const mongoose = require('mongoose');

const databaseConnect = () => {
    mongoose.connect(process.env.DB_URI, {
    })
    .then((data) => {
        console.log(`MongoDB Connected: ${data.connection.host}`);
    })
}

module.exports = databaseConnect;