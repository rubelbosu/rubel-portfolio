import FeedbackModel from "../../models/FeedbackModel";
import connectDatabase from "../../middleware/mongoose";
import moment from "moment";
import isEmail from "validator/lib/isEmail";
import { isLength } from "validator";

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      if (!isLength(req.body.Name, { min: 2, max: undefined })) {
        res
          .status(400)
          .json({ error: "Please enter atleast 3 characters in name" });
        return;
      }
      if (!isEmail(req.body.Email)) {
        res.status(400).json({ error: "Please enter valid email!" });
        return;
      }
      if (!isLength(req.body.Description, { min: 9, max: undefined })) {
        res
          .status(400)
          .json({ error: "Please enter atleast 10 characters in description" });
        return;
      }
      if (req.body.Rating === null) {
        res.status(400).json({ error: "Please select a rating among emojis" });
        return;
      }
      let f = new FeedbackModel({
        Name: req.body.Name,
        Email: req.body.Email,
        Description: req.body.Description,
        Rating: req.body.Rating,
        Time: moment().format("YYYY-MM-DD"),
      });
      f.save();
      res.status(200).json({ success: "Success" });
    } else {
      res.status(400).json({ error: "This method is not allowed" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export default connectDatabase(handler);
