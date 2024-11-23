import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { userModel } from "../models/user.js";
import { generateToken } from "../utils/jwtToken.js";
import cloudinary from "cloudinary";

export const registerPatient = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone, dob, nic, gender, password } =
    req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !dob ||
    !phone ||
    !nic ||
    !gender ||
    !password
  ) {
    return next(new ErrorHandler("Fill Full Form", 400));
  }
  const isRegistered = await userModel.findOne({ email });
  console.log("user", isRegistered);
  if (isRegistered) {
    return next(new ErrorHandler("User With Same Email already Registered"));
  }

  const patient = await userModel.create({
    firstName,
    lastName,
    email,
    dob,
    phone,
    nic,
    gender,
    password,
    role: "Patient",
  });
  generateToken(patient, "Patient Registered Successfuly", 200, res);
});

export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please Fill Full Form", 400));
  }
  const user = await userModel.findOne({ email }).select("+password");
  console.log("The found User is ", user);
  if (!user) {
    return next(new ErrorHandler("Email or Password incorrct", 400));
  }

  const isMatched = await user.comparePasswords(password);
  if (!isMatched) {
    return next(new ErrorHandler("Email or Password incorrct", 400));
  }
  generateToken(user, "User Logged In Successfully!", 200, res);
});

export const addAdmin = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, dob, phone, gender, nic, password } =
    req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !dob ||
    !phone ||
    !gender ||
    !nic ||
    !password
  ) {
    return next(new ErrorHandler("Please Fill Full Form", 400));
  }
  const newAdmin = await userModel.create({
    firstName,
    lastName,
    email,
    dob,
    phone,
    nic,
    gender,
    password,
    role: "Admin",
  });
  generateToken(newAdmin, "New Admin Registered Successfully", 201, res);
});


