import express from "express";
import productsController from "../controllers/productsController.js";
const router = express.Router();

router.get("/data", productsController.getAllProducts);

export default router;
