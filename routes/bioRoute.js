import { getTaylor } from "../controllers/bioController.js";
import express from "express";

const router = express.Router();

router.get('/taylor-swift', getTaylor);

export default router;

