import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name Should At Least Contains Three Characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name Should At Least Contains Three Characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid Email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone Number Must Contains Exact Eleven Characters"],
    maxLength: [11, "Phone Number Must Contains Exact Eleven Characters"],
  },
  message: {
    type: String,
    required: true,
    minLength: [10, "Message Should At Least Contains Ten Characters"],
  },
});

export const messageModel = mongoose.model("message", messageSchema);
