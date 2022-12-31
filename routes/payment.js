import bodyParser from "body-parser";
import express from "express";
import { checkoutSession, getPlans } from "../controllers/payment.js";
import checkAuth from "../middleware/auth.js";


const router = express.Router();

// router.get("/getMyAds/:userId", multipleUpload, getMyAds);
// router.patch("/addFavourites/:userId/:postId",, getMyAds);
// router.post("/addpayment", paymentDetails);
// router.get("/is-user", auth, isUser);
router.get("/get-plans", getPlans);
router.post("/subscription", checkAuth, checkoutSession);
// router.post("/webhook", bodyParser.raw({ type: 'application/json' }), callStripeHook);

export default router;