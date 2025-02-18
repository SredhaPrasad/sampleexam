const express = require("express");
const router = express.Router();
const OTP = require("../model/otp");
const nodemailer = require("nodemailer");
require("dotenv").config();

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  throw new Error("Email credentials are not defined in environment variables");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


router.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ success: false, message: "Email is required" });
  
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await OTP.deleteMany({ email }); // Remove any existing OTPs
  const newOtp = new OTP({ email, otp });
  await newOtp.save();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}. It expires in 5 minutes.`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) return res.status(500).json({ success: false, message: "Error sending OTP" });
    res.status(200).json({ success: true, message: "OTP Sent" });
  });
});



router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ success: false, message: "Email and OTP are required" });

  const record = await OTP.findOne({ email, otp });
  if (record) {
    await OTP.deleteMany({ email }); 
    res.status(200).json({ success: true, message: "OTP Verified" });
  } else {
    res.status(400).json({ success: false, message: "Invalid OTP" });
  }
});

module.exports = router;