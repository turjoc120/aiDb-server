import mongoose from "mongoose";

const orderItemsSchema = mongoose.Schema({
  quantity: { type: Number },
  created_at: { type: Date},
  modified_at: { type: Date},
  orderId: {type: mongoose.Schema.Types.ObjectId, ref:'order_details'},
  productId: {type: mongoose.Schema.Types.ObjectId, ref:'product'}
});

export default mongoose.model("order_items", orderItemsSchema);
