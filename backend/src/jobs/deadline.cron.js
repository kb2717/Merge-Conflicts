import cron from "node-cron";
import Opportunity from "../models/opportunity.model.js";
import urgency from "../utils/urgencyCalculator.js";

cron.schedule("0 * * * *", async () => {
  const opps = await Opportunity.find();
  opps.forEach(o => urgency(o.deadline));
});