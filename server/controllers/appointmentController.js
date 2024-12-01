import { appointmentModel } from "../models/appointment.js";
import { userModel } from "../models/user.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

export const postAppointment = catchAsyncErrors(async (req, res, next) => {
  const {
    firstName,
    lastName,
    phone,
    nic,
    dob,
    gender,
    department,
    appointmentDate,
    doctor_firstName,
    doctor_lastName,
    address,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !phone ||
    !nic ||
    !dob ||
    !gender ||
    !department ||
    !appointmentDate ||
    !doctor_lastName ||
    !address
  ) {
    return next(new ErrorHandler(400, "Please Fill Full Form"));
  }

  const isConflict = await userModel.find({
    firstName: doctor_firstName,
    role: "Doctor",
    docDepartment: department,
  });
  console.log(isConflict.length);

  if (isConflict.length === 0) {
    return next(new ErrorHandler("Doctor Not Found", 404));
  } else if (isConflict.length > 1) {
    return next(
      new ErrorHandler(
        "Doctors Conflict Please Contact through email or phone",
        400
      )
    );
  }

  const newAppointment = await appointmentModel.create({
    firstName,
    lastName,
    phone,
    nic,
    dob,
    gender,
    department,
    appointmentDate,
    doctor_firstName,
    doctor_lastName,
    address,
  });

  res.status(200).json({
    success: true,
    message: "New appointment posted successfully!",
    appointment: newAppointment,
  });
});

export const getAllApointments = catchAsyncErrors(async (req, res, next) => {
  const allAppointments = await appointmentModel.find({});
  if (allAppointments.length === 0) {
    return next(new ErrorHandler("No Appointments found", 404));
  }
  res.status(200).json({
    success: true,
    message: "Successfully fetched all apointments",
    appointments: allAppointments,
  });
});

export const updateAppointmentStatus = catchAsyncErrors(async(req,res,next)=>{
  const { id } = req.params;
  let appointment = await appointmentModel.findById(id )
  if(!appointment) {
    return next(new ErrorHandler("Appointment Id incorrect", 400))
  }
  appointment = await appointmentModel.findByIdAndUpdate(id,req.body,{
    new:true,
    runValidators: true,
    useFindAndModify: false,
  })
  res.status(200).json({
    success:true,
    message:"status updated successfully",
    updatedAppointment: appointment
  })
})

export const deleteAppointment = catchAsyncErrors(async(req,res,next)=>{
  const {id} = req.params
  let appointment = await appointmentModel.findById(id)
  if(!appointment) {
    return next(new ErrorHandler("Appointment id Incorrect",400))
  }
  await appointmentModel.deleteOne();
  res.status(200).json({
    success:true,
    message: "Appointment Deleted Successfully",
  })
})
