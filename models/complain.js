import mongoose from "mongoose";

const complainSchema = mongoose.Schema({
  customer: { type: String },
  orderId: { type: String},
  complain: { type: String},
  note: { type: String},
  date: { type: String},
  phone: { type: Number},
});

export default mongoose.model("complain", complainSchema);