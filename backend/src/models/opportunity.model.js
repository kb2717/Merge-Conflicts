import mongoose from "mongoose";

const opportunitySchema = new mongoose.Schema({
  title: String,
  description: String,
  requiredSkills: [String],
  eligibleBranches: [String],
  minCGPA: Number,
  deadline: Date
});

export default mongoose.model("Opportunity", opportunitySchema);