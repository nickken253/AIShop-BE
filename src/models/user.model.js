import mongoose from "mongoose";
let Schema = mongoose.Schema;
let userSchema = new Schema({
  profile: {
    firstname: { type: String, default: null, unique: false  },
    lastname: { type: String, default: null, unique: false  },
    gender: { type: String, default: "male" },
    email: { type: String, default: null, unique: true},
    phone: { type: String, default: null, unique: false  },
    avatarLink: { type: String, default: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg", unique: false  },
  },
  password: { type: String, default: null, unique: false  },
  role: { type: String, default: "user", unique: false  },
  isActive: { type: Boolean, default: false, unique: false  },
  token: { type: String, default: null, unique: false  },
  address: {
    nation: { type: String, default: null, unique: false  },
    city: { type: String, default: null, unique: false  },
    district: { type: String, default: null, unique: false  },
    street: { type: String, default: null, unique: false  },
    other: { type: String, default: null, unique: false  },
  },
  createdAt: { type: Date, default: Date.now, unique: false  },
  updatedAt: { type: Date, default: Date.now, unique: false  },
});

userSchema.statics = {
  creatNew(item) {
    return this.create(item);
  },
};

export default mongoose.model("User", userSchema);
