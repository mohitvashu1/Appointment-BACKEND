import express from "express";
import upload from "../middlewares/multer.js";
import { addDoctor } from "../controllers/adminController.js";

const router = express.Router();

// use multer for file upload
router.post("/add-doctor", upload.single("image"), addDoctor);

export default router;
