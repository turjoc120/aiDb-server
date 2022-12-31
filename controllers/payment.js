import mongoose from 'mongoose';
import user from '../models/user.js';
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

    // get customer id form user db 
    const userDetails = await user.findOne({ email: req.body.email })

    // checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{
        price: req.body.priceId,
        quantity: 1,
      }],
      customer: userDetails?.customerId
      ,
      subscription_data: {
        trial_period_days: 10,
      },
      success_url: "http://localhost:3000/app/crm/dashboard",
      cancel_url: "http://localhost:3000/plans"
    })
    // console.log(session);
    //  MVP
    const updatedUser = await user.findOneAndUpdate({ email: req.body.email }, { $push: { authority: ["premium", "basic"] } })

    res.json({ session, updatedUser })
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: error.message })
  }
}






// export const callStripeHook = async (request, response) => {
//   const endpointSecret = "whsec_3bff3c0ede0549463e5794ec4e1bd685009c6dbccade4260d4405446f0abb6ad";
//   const sig = request.headers['stripe-signature'];

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
//   } catch (err) {
//     response.status(400).send(`Webhook Error: ${err.message}`);
//     return;
//   }


//   switch (event.type) {
//     case 'checkout.session.completed':
//       const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
//         session.id,
//         {
//           expand: ['line_items'],
//         }
//       );
//       const lineItems = session.line_items;
//       console.log(lineItems);

//     // case 'invoice.payment_succeeded':
//     //   const paymentIntent = event.data;
//     //   console.log("payment -------" + paymentIntent);
//     //   //  update user authority
//     //   const userDetails = await user.findOneAndUpdate({ email: paymentIntent.customer_details.email }, { $addToSet: { authority: ["premium"] } })
//     //   console.log("user -------" + userDetails);
//     //   break;

//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }

//   // Return a 200 response to acknowledge receipt of the event
//   response.send();
// };


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