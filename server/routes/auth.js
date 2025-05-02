const router = require("express").Router();
const User = require("../models/User");
const { sendOTP, checkOTP } = require("../utils/sendotp");

// 1. Signup (Aadhaar + email + phone → send OTP)
router.post("/signup", async (req, res) => {
  const { aadhaar, email, phone } = req.body;
  try {
    let user = await User.findOne({ aadhaar });
    if (!user) user = await User.create({ aadhaar, email, phone });
    await sendOTP(phone);
    res.status(200).json({ success: true, message: "OTP sent" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 2. Verify OTP
router.post("/verify-otp", async (req, res) => {
  const { phone, code } = req.body;
  try {
    const verification = await checkOTP(phone, code);
    if (verification.status === "approved") {
      await User.findOneAndUpdate({ phone }, { isVerified: true });
      res.json({ success: true, message: "Phone verified" });
    } else {
      res.status(400).json({ success: false, message: "Invalid code" });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
