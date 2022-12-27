import PaymentDetialsModal from "../models/payment_details.js";
import mongoose from 'mongoose';


export const paymentDetails = async (req, res) => {
  //   const  details  = req.body;
  // console.log(req.body);
  //   try {
  //       const paymentDetails = await PaymentDetialsModal.create({ ...details})

  //       res.status(200).json({paymentDetails, message: "paymentDetails added" })
  //   } catch (error) {
  //       console.log(error);
  //       res.status(409).json({ message: error.message })
  //   }
}



export const getPaymentDetails = async (req, res) => {
  // try {
  //   const allPaymentDetails = await PaymentDetialsModal.find().populate(["orderDetailsId"])
  //   res.status(200).json(allPaymentDetails)
  // } catch (error) {
  //   console.log(error)
  //   res.status(404).json({ message: error.message })
  // }
}



//   export const getProductDetails = async (req, res) => {
//     try {
//       const orderDetail = await OrderDetailsModal.findById(req.params.id).populate(["userId"]).populate(["paymentDetailsId"])
//       res.status(200).json(orderDetail)
//     } catch (error) {
//       res.status(404).json({ message: error.message })
//     }
//   }