import express from "express";
import { getPlans } from "../controllers/payment.js";
import auth from "../middleware/auth.js";


const router = express.Router();

// router.get("/getMyAds/:userId", multipleUpload, getMyAds);
// router.patch("/addFavourites/:userId/:postId",, getMyAds);
// router.post("/addpayment", paymentDetails);
// router.get("/is-user", auth, isUser);
router.get("/get-plans", getPlans);

export default router;