import { Router } from "express";
import {
  createAmante,
  getAmantesByInterest
} from "../controllers/amante.controller.js";
import {
  validateCreateAmante,
  validateInterestQuery
} from "../dto/amante.dto.js";

const router = Router();

router.post("/", validateCreateAmante, createAmante);
router.get("/", validateInterestQuery, getAmantesByInterest);

export default router;
