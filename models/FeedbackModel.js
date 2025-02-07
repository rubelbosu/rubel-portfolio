import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Email: {
    type: String,
  },
  Description: {
    type: String,
  },
  Rating: {
    type: String,
  },
  Time: {
    type: String,
  },
});
mongoose.models = {};
export default mongoose.model("FeedbackSchema", FeedbackSchema);
