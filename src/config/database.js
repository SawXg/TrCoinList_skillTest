const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

// Set strictQuery to false to prepare for Mongoose 7
mongoose.set('strictQuery', false);

const connectDatabase = () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        })
        .catch((error) => {
            console.log(`Database connection error: ${error.message}`);
        });
}

module.exports = connectDatabase;