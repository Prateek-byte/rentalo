const router = require("express").Router();
const User = require("../models/User");
const { sendOTP, checkOTP } = require("../utils/sendotp");

// 1. Request OTP (phone only)
router.post("/signup", async (req, res) => {
  const { phone } = req.body;
  try {
    let user = await User.findOne({ phone });
    if (!user) user = await User.create({ phone });
    const twilioResponse = await sendOTP(phone);
    console.log("OTP sent via Twilio:", twilioResponse);
    res
      .status(200)
      .json({ success: true, message: "OTP sent", data: twilioResponse });
  } catch (err) {
    console.error("Error sending OTP:", err);
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to send OTP",
        error: err.message,
      });
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

// 3. Complete profile (aadhaar + email)
router.post("/complete-profile", async (req, res) => {
  const { phone, aadhaar, email } = req.body;
  try {
    const user = await User.findOne({ phone });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    user.aadhaar = aadhaar;
    user.email = email;
    await user.save();
    res.json({ success: true, message: "Profile completed" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4. Get current user info
router.get("/me", async (req, res) => {
  const { phone } = req.query;
  try {
    const user = await User.findOne({ phone });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
