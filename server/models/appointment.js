import mongoose from 'mongoose'
import validator from 'validator'

const appointmentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name Is Required!"],
        min_length: [3,"The first Name should at least contain three characters"]
    },
    lastName: {
        type: String,
        min_length: [3,"Last name should at least contain three characters"],
        required: [true, "Last name Is Required!"],
    },
    phone: {
        type:String,
        required: [true,"The phone number is required"],
        min_length: [11,"Phone number must contain exact 11 characters!"],
        max_length: [11,"Phone number must contain exact 11 characters!"]
    },
    nic: {
        type: String,
        required: [true, "NIC is required"],
        min_length: [13, "NIC must contain exact 13 characters!"],
        max_length: [13, "NIC must contain exact 13 characters!"],
    },
    dob: {
        type: Date,
        required: [true, "dob Is Required!"],
    },
    gender: {
        type: String,
        required: [true,"Gender is Required"],
        enum : ["Male","Female","Other"],
    },
    department: {
        type: String,
        required: [true,"Department is Required"]
    },
    appointmentDate: {
        type: Number,
        required: [true,"Appointment Id is Required"]
    },
    doctor_firstName: {
        type: String,
        required: [true,"Doctor is Required"]
    },
    doctor_lastName: {
        type: String,
        required: [true,"Doctor is Required"]
    },
    doctorId: {
        type: mongoose.Schema.ObjectId,
        ref: "Doctor",
    },
    patientId: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    status: {
        type: String,
        enum: ["Pending","Accepted","Rejected"],
        default: "Pending"
    }

})

export const appointmentModel = mongoose.model("appointment",appointmentSchema)