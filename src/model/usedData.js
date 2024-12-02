const mongoose = require('mongoose');

const usedDataSchema = new mongoose.Schema({
    name: {
        type: String
    },
    mobileNumber: {
        type: String
    },
    salary: {
        type: String
    },
    location: {
        type: String
    },
    email: {
        type: String
    },
    downloadDate: {
        type: Date
    },
    branchName: {
        type: String
    }
});

module.exports = mongoose.model('UsedData', usedDataSchema);