import express from "express";
import {
  isPatientAuthenticated,
  isAdminAuthenticated,
} from "../middlewares/auth.js";
import {
  postAppointment,
  getAllApointments,
  updateAppointmentStatus,
  deleteAppointment,
} from "../controllers/appointmentController.js";

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);
router.get("/getall", isAdminAuthenticated, getAllApointments);
router.put("/updatestatus/:id", isAdminAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);

export default router;
