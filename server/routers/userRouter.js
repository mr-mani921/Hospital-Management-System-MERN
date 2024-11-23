import express from "express";
import {
  loginUser,
  registerPatient,
  addAdmin,
  addNewDoctor
} from "../controllers/userController.js";
import { isAdminAuthenticated,isPatientAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/patient/register", registerPatient);
router.post("/patient/login", loginUser);
router.post("/admin/addnew", isAdminAuthenticated, addAdmin);
router.post("/doctor/addnew",isAdminAuthenticated, addNewDoctor)

export default router;
