const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    item: { type: String, required: true },
    quantity: { type: Number, required: true },
    donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    organization: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donation', donationSchema);
