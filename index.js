import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from "dotenv"
import payment from "./routes/payment.js";
import user from "./routes/user.js";

dotenv.config()
const app = express()

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use('/webhook', bodyParser.raw({ type: 'application/json' }))
app.use(express.json({
    limit: '5mb',
    verify: (req, res, buf) => {
        req.rawBody = buf.toString();
    }
}));

// app.use('/uploads', express.static('uploads'))
app.use(cors())


app.use('/api/payment', payment)
app.use('/api/user', user)


app.get('/', async (req, res) => {
    res.json({ status: "ok", message: "AI db server is running..." })
})

const CONNECTION_URL = 'mongodb+srv://mujtaba:iy0NF9mz7WSRVbmg@cluster0.3rpzd78.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`)))
    .catch((error) => console.log(error))




// app.post('/webhook', async (request, response) => {
//     const endpointSecret = "whsec_3bff3c0ede0549463e5794ec4e1bd685009c6dbccade4260d4405446f0abb6ad";
//     const sig = request.headers['stripe-signature'];
//     console.log("hit...hook");
//     let event;

//     try {
//         event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
//     } catch (err) {
//         response.status(400).send(`Webhook Error: ${err.message}`);
//         return;
//     }


//     switch (event.type) {
//         case 'checkout.session.completed':
//             const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
//                 session.id,
//                 {
//                     expand: ['line_items'],
//                 }
//             );
//             const lineItems = session.line_items;
//             console.log("checkout.session.completed");
//             break
//         case 'invoice.payment_succeeded':
//             const paymentIntent = event.data;
//             console.log("payment -------" + paymentIntent);
//             //  update user authority
//             const userDetails = await user.findOneAndUpdate({ email: paymentIntent.customer_details.email }, { $addToSet: { authority: ["premium"] } })
//             console.log("user -------" + userDetails);
//             break;

//         default:
//             console.log(`Unhandled event type ${event.type}`);
//     }

//     // Return a 200 response to acknowledge receipt of the event
//     response.send();
// });
