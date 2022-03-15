import dbConnect from "../../../utils/dbConnect";
import Note from "../../../models/Note";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;
  console.log(method);
  switch (method) {
    case "GET":
      try {
        const notes = await Note.find({});
        res.status(200).json({ success: true, data: notes });
      } catch (error) {
        res.status(400).json({ success: false, error: error });
      }
      break;
    case "POST":
      try {
        const note = await Note.create(req.body);
        res.status(201).json({ success: true, data: note });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
