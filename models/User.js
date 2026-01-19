import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  firstName: { type: String, required: true, minlength: 2 },
  lastName: { type: String, required: true, minlength: 2 },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 6 },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  createdAt: { type: Date, default: Date.now }}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;