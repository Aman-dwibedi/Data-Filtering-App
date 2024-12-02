const mongoose = require('mongoose');

const rawLeadSchema = new mongoose.Schema({
    name: {
        type: String
    },
    mobileNumber: {
        type: String,
        unique: true
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
    uploadDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String
    }
});

module.exports = mongoose.model('RawLead', rawLeadSchema);
