import express from "express";
import { paymentDetails, getPaymentDetails } from "../controllers/payment.js";


const router = express.Router();

// router.get("/getMyAds/:userId", multipleUpload, getMyAds);
// router.patch("/addFavourites/:userId/:postId",, getMyAds);
// router.post("/addpayment", paymentDetails);
router.get("/getpayment", getPaymentDetails);

export default router;