import mongoose from "mongoose";

const alertSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  opportunityId: mongoose.Schema.Types.ObjectId,
  urgency: String,
  daysLeft: Number
});

export default mongoose.model("DeadlineAlert", alertSchema);