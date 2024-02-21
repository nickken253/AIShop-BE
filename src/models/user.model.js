import mongoose from "mongoose";
let Schema = mongoose.Schema;
let userSchema = new Schema({
  profile: {
    firstname: { type: String, default: null },
    lastname: { type: String, default: null },
    gender: { type: String, default: "male" },
    email: { type: String, default: null, unique: true, sparse: true, required: true},
    phone: { type: String, default: null },
    avatarLink: {
      type: String,
      default:
        "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg",
      unique: false,
    },
  },
  password: { type: String, default: null, required: true},
  role: { type: String, default: "user" },
  isActive: { type: Boolean, default: false },
  token: { type: String, default: null },
  address: {
    nation: { type: String, default: null },
    city: { type: String, default: null },
    district: { type: String, default: null },
    street: { type: String, default: null },
    other: { type: String, default: null },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

userSchema.statics = {
  creatNew(item) {
    return this.create(item);
  },
};

export default mongoose.model("User", userSchema);
