import { Router } from "express";
import {getAll,getOne,insertOne} from "../controllers/sensorController.js";
const router=Router();
router.get("/", getAll);
router.get("/:id", getOne);
router.post("/",insertOne);
export default router;