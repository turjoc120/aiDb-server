import express from "express";
import { addUser, getUsers, geUserDetails } from "../controllers/user.js";
import checkAuth from "../middleware/auth.js";


const router = express.Router();


router.post("/add-user", checkAuth, addUser);
router.get("/all-user", getUsers);
router.get("/get-user", geUserDetails);


export default router;