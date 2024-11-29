import express from "express";
import {
  loginUser,
  registerPatient,
  addAdmin,
  addNewDoctor,
  getAllDoctors,
  logoutAdmin,
  logoutPatient,
  logoutDoctor,
  getUser
} from "../controllers/userController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
  isDoctorAuthenticated,
} from "../middlewares/auth.js";
const router = express.Router();

router.post("/patient/register", registerPatient);
router.post("/login", loginUser);
router.post("/admin/addnew", isAdminAuthenticated, addAdmin);
router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
router.get("/doctor/getall", isPatientAuthenticated, getAllDoctors);
router.get("/me", isPatientAuthenticated, getUser);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.get("/doctor/logout", isDoctorAuthenticated, logoutDoctor);

export default router;
