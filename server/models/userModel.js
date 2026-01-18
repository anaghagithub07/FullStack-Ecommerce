import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true, // email must be unique
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verifyOtp: {
    type: String,
    default: "", // optional, empty string by default
  },
  verifyOtpExpireAt: {
    type: Number,
    default: 0, // default 0
  },
  isAccountVerified: {
    type: Boolean,
    default: false, // default false
  },
  resetOtp: {
    type: String,
    default: "", // optional, empty string by default
  },
  resetOtpExpireAt: {
    type: Number,
    default: 0, // default 0
  },
}, { timestamps: true }); // automatically adds createdAt and updatedAt

// Prevent model overwrite in hot-reload environments
const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
