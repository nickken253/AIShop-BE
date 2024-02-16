import mongoose from "mongoose";
let Schema = mongoose.Schema;
let adminSchema = new Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String },
  role: { type: String },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: null },
});
module.exports = mongoose.model("admin", adminSchema);
