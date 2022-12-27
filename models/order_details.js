import mongoose from "mongoose";

const orderDetailsSchema = mongoose.Schema({
  total: { type: Number },
  created_at: { type: String},
  modified_at: { type: String},
  userId: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  paymentDetailsId: {type: mongoose.Schema.Types.ObjectId, ref:'payment_details'}
});

export default mongoose.model("order_details", orderDetailsSchema);