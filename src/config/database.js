const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

const connectDatabase = () => {
    if (!MONGO_URI) {
        console.warn("MONGO_URI not set. Skipping database connection.");
        return;
    }

    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        })
        .catch((err) => {
            console.error(`MongoDB connection error: ${err.message}`);
        });
}

module.exports = connectDatabase;