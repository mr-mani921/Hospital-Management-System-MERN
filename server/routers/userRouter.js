import express from "express";
import {
  loginUser,
  registerPatient,
  addAdmin,
  addNewDoctor,
  getAllDoctors,
  logoutAdmin
} from "../controllers/userController.js";
import { isAdminAuthenticated,isPatientAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/patient/register", registerPatient);
router.post("/login", loginUser);
router.post("/admin/addnew", isAdminAuthenticated, addAdmin);
router.post("/doctor/addnew",isAdminAuthenticated, addNewDoctor)
router.get("/doctor/getall",isAdminAuthenticated, getAllDoctors)


export default router;
