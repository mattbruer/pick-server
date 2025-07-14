import mongoose, { Schema } from "mongoose"

const userSchema = new Schema(
  {
    firebaseId: { type: String, required: true }, // think about future migration away from firebase
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // think about future migration away from firebase
    phone: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
)

// Create the User model
const User = mongoose.model("User", userSchema)

export { User }
