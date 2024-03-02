import mongoose from "mongoose";

const { Schema } = mongoose;

const cartItemSchema = new Schema({
  product_Id: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  productId: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  items: {
    type: [cartItemSchema],
    default: [],
  },
  totalQuantity: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
