import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  opportunityId: mongoose.Schema.Types.ObjectId,
  status: { type: String, default: "APPLIED" },
  matchScore: Number
});

export default mongoose.model("Application", applicationSchema);