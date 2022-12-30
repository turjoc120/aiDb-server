import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    uid: { type: String },
    avatar: { type: String },
    userName: { type: String },
    email: { type: String },
    authority: { type: Array },
});

export default mongoose.model("user", userSchema);