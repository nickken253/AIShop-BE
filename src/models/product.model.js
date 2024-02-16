import mongoose from "mongoose";
let Schema = mongoose.Schema;

let productSchema = new Schema({
  catalog: {
    type: String,
    required: true,
    enum: ["Thời trang nam", "Đồ điện tử", "...."], 
  },
  name: {
    type: String,
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
  sale_price: {
    type: Number,
    required: true,
    default: function () {
      return this.price * (1 - (this.discount || 0));
    },
  },
  image_link: {
    type: String,
    required: false,
  },
  image_list: {
    type: [String],
    required: false,
  },
  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
  view: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Product", productSchema);
