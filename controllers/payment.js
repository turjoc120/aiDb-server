import mongoose from 'mongoose';
import { stripe } from '../utils/stripe.js';

// get plans form stripe 
export const getPlans = async (req, res) => {
  try {
    console.log("hit..plans..con");
    const prices = await stripe.prices.list()
    res.json(prices)
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: error.message })
  }
}

// stripe checkout session 
export const checkoutSession = async (req, res) => {
  try {
    console.log("hit..checkoutSession..con");
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{
        price: req.body.id
      }],
      subscription_data: [{
        trial_period_days: 10
      }],
      success_url: "http://localhost:3000/app/crm/dashboard",
      cancel_url: "http://localhost:3000/plans"
    })
    res.json(prices)
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: error.message })
  }
}


// export const paymentDetails = async (req, res) => {
  //   const  details  = req.body;
  // console.log(req.body);
  //   try {
  //       const paymentDetails = await PaymentDetialsModal.create({ ...details})

  //       res.status(200).json({paymentDetails, message: "paymentDetails added" })
  //   } catch (error) {
  //       console.log(error);
  //       res.status(409).json({ message: error.message })
  //   }
// }



// export const isUser = async (req, res) => {
//   try {
//     console.log("h11...");
//     // const allPaymentDetails = await PaymentDetialsModal.find().populate(["orderDetailsId"])
//     // res.status(200).json({ atkr: "jdbfjavdshjfv" })
//     res.send({ ola: "olllaaaaaaaaaaaa" })
//   } catch (error) {
//     console.log(error)
//     res.status(404).json({ status: false, message: error.message })
//   }
// }
//   export const getProductDetails = async (req, res) => {
//     try {
//       const orderDetail = await OrderDetailsModal.findById(req.params.id).populate(["userId"]).populate(["paymentDetailsId"])
//       res.status(200).json(orderDetail)
//     } catch (error) {
//       res.status(404).json({ message: error.message })
//     }
//   }