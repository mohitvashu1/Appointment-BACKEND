import express from "express";
import upload from "../middlewares/multer.js";
import { addDoctor,loginAdmin,allDoctors } from "../controllers/adminController.js";
import authAdmin from "../middlewares/authAdmin.js";

const adminRouter = express.Router();

// use multer for file upload

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.get("/all-doctors", authAdmin, allDoctors);



export default adminRouter;
