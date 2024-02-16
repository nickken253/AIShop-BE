import mongoose from "mongoose";
let Schema = mongoose.Schema;

let orderSchema = new Schema({
  transaction: {
    type: Schema.Types.ObjectId,
    ref: "Transaction",
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: false,
  },
  amount: {
    type: Number,
    required: true,
  },
  data: {
    type: Object,
    required: false,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "confirmed", "shipped", "delivered", "canceled"],
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
