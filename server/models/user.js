import mongoose, { mongo } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name Name Is Required!"],
    min_length: [3, "The First Name Should contain atleast three characters"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name Name Is Required!"],
    min_length: [3, "The Last Name Should contain atleast three characters"],
  },
  email: {
    type: String,
    required: [true, "Email Is Required!"],
    validate: [validator.isEmail, "Provide a valid Email"],
  },
  phone: {
    type: String,
    required: [true, "Phone Is Required!"],
    min_length: [11, "The Phone Number Must Contain Exact 11 Characters"],
  },
  nic: {
    type: String,
    required: [true, "NIC Is Required!"],
    min_length: [11, "The NIC Must Contain Exact 13 Characters"],
    max_length: [11, "The NIC Must Contain Exact 13 Characters"],
  },
  dob: {
    type: String,
    required: [true, "DOB Is Required!"],
  },
  password: {
    type: String,
    required: [true, "Password Name Is Required!"],
    min_length: [8, "The Password Must Contain Exact 13 Characters"],
    select: false,
  },
  gender: {
    type: String,
    required: [true, "Gender Name Is Required!"],
    enum: ["Male", "Femail"],
  },
  role: {
    type: String,
    required: [true, "Role Is Required!"],
    enum: ["Admin", "Patient", "Doctor"],
  },
  docDepartment: {
    type: String,
  },
  avatar: {
    public_id: String,
    url: String,
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 14);
});

userSchema.methods.comparePasswords = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


userSchema.methods.generateJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

export const userModel = mongoose.model("user", userSchema);
