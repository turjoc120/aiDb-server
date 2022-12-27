import mongoose from "mongoose";

const paymentDetailsSchema = mongoose.Schema({
  amount: { type: Number },
  provider: { type: String},
  status: { type: Boolean},
  created_at: { type: String},
  modified_at: { type: String},
  orderDetailsId: { type: String}
});

export default mongoose.model("payent_details", paymentDetailsSchema);