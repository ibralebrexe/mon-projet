import express from "express";
import { Router } from "express";
import reservationController from "./reservation.controller";

const router: Router = express.Router();
const endpoint = '/available';

router.get(endpoint, reservationController.availability);

