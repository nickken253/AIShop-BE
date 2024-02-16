import mongoose from "mongoose";
let Schema = mongoose.Schema;

let catalogSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  parent_id: {
    type: Schema.Types.ObjectId,
    ref: "Catalog",
    required: false,
  },
  sort_order: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("Catalog", catalogSchema);
