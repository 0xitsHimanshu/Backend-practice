import  Express  from "express";
import { User } from "../models/user.js";
import { createNewUser, getAllUser, getUserDetails } from "../controllers/user.js";

const router = Express.Router();

router.get("/all",getAllUser)

router.post("/new", createNewUser);

router.get("/userId/:id", getUserDetails);

export default router;