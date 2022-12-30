import express from "express";
import { addUser, getUsers, geUserDetails } from "../controllers/user.js";
import auth from "../middleware/auth.js";


const router = express.Router();


router.post("/add-user", auth, addUser);
router.get("/all-user", getUsers);
router.get("/get-user", geUserDetails);


export default router;