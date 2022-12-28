import express from "express";
import { paymentDetails, isUser, getPlans } from "../controllers/payment.js";
import auth from "../middleware/auth.js";


const router = express.Router();

// router.get("/getMyAds/:userId", multipleUpload, getMyAds);
// router.patch("/addFavourites/:userId/:postId",, getMyAds);
// router.post("/addpayment", paymentDetails);
router.get("/is-user", isUser);
router.post("/get-plans", auth, getPlans);

export default router;