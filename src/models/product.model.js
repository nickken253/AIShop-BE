import mongoose from "mongoose";
let Schema = mongoose.Schema;

// let productReviewSchema = new Schema({
//   userName: { type: String, required: true, default: null},
//   rating: { type: Number, required: true, default: 0 },
//   review: { type: String, default: null },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// });

let productsStyleSchema = new Schema({
  id: {type: Number, unique: true},
  gender : {type: String, default: null},
  masterCategory : {type: String, default: null},
  subCategory : {type: String, default: null},
  articleType : {type: String, default: null},
  baseColour : {type: String, default: null},
  season : {type: String, default: null},
  year : {type: Number, default: null},
  usage : {type: String, default: null},
  productDisplayName : {type: String, default: null},
  link : {type: String, default: null},
  description: {type: String, default: null},
  price: {type: Number, default: 0},
  // reviews: {
  //     type: [productReviewSchema],
  //     default: [],
  // },
  // totalRating: { type: Number, default: 0 },
  // totalReview: { type: Number, default: 0 },
});

export default mongoose.model("Product", productsStyleSchema);
