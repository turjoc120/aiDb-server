import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    uid: { type: String, required: true },
    avatar: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    customerId: { type: String, required: true },
    authority: { type: Array, required: true },
});

export default mongoose.model("user", userSchema);