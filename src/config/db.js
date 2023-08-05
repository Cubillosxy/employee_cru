const mongoose = require('mongoose');

const url = process.env.MONGODB_URI || 'mongodb://mongo:27017';

const connectDb = () => {
    mongoose.connect(url)
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log(err));
}

module.exports = connectDb;