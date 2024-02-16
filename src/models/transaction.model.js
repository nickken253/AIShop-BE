import mongoose from "mongoose";
let Schema = mongoose.Schema;

let transactionSchema = new Schema({
  status: {
    type: String,
    required: true,
    enum: ["pending", "confirmed", "shipped", "delivered", "canceled"],
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  user_name: {
    type: String,
    required: false,
  },
  user_email: {
    type: String,
    required: false,
  },
  user_phone: {
    type: String,
    required: false,
  },
  amount: {
    type: Number,
    required: true,
  },
  payment: {
    type: String,
    required: true,
    enum: ["COD", "CreditCard", "Wallet"],
  },
  payment_info: {
    type: Object,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
  security: {
    type: String,
    required: false,
  },
  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
