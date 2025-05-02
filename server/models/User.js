const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  aadhaar:   { type: String, required: true, unique: true },
  email:     { type: String, required: true, unique: true },
  phone:     { type: String, required: true },
  isVerified:{ type: Boolean, default: false }
}, { timestamps: true });
module.exports = mongoose.model('User', UserSchema);
