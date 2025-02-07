import FeedbackModel from "../../models/FeedbackModel";
import connectDatabase from "../../middleware/mongoose";

const handler = async  (req,res) => {
  try{
    let feedbacks = await FeedbackModel.find()
    res.status(200).json({ feedbacks });
  }
  catch(err){
    res.status(500).json({error:"There is an issue with our backend."})
  }
}

export default connectDatabase(handler)
