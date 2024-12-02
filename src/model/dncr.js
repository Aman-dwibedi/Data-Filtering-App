const mongoose = require('mongoose');

const dncrSchema = new mongoose.Schema({
    mobileNumber: {
        type: String,
        unique: true
    },
    dncrStatus: {
        type: String,
        default: false
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('DNCR', dncrSchema );