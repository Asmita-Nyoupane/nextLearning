import mongoose, { Document, Model } from "mongoose";

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
  isAdmin: boolean;
  forgetPasswordToken: string;
  forgetPasswordTokenExpiry: Date;
  verifyToken: string | null;
  verifyTokenExpiry: Date | null;
}

const userSchema: mongoose.Schema<User> = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide your name"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    require: [true, "Please provide your email address"],
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please provide correct email",
    ],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please provide your password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgetPasswordToken: String,
  forgetPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

// const User =
//   (mongoose.models.users as mongoose.Model<User>) ||
//   mongoose.model<User>("User", userSchema);
// export default User;
const User: Model<User> =
  mongoose.models.User || mongoose.model<User>("User", userSchema);
export default User;
