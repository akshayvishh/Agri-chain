const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  emailOrMobile: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Farmer', 'Buyer', 'General'], required: true },
  gstNumber: { type: String }, // Only for Buyers
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
