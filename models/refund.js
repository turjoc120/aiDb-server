import mongoose from "mongoose";

const refundSchema = mongoose.Schema({
  orderId: { type: String },
  orderDate: { type: String},
  customer: { type: String},
  store: { type: String},
  refundAmount: { type: Number},
  status: { type: String},
});

export default mongoose.model("refund", refundSchema);