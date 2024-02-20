import mongoose from "mongoose";
let Schema = mongoose.Schema;

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
});

export default mongoose.model("Product", productsStyleSchema);
