import express from "express";
import Transaction from "../models/Transcation.js";

const router = express.Router();

router.get("/transactions", async (req, res) => {
  try {
    //limit the 50 entries data, always fetch the most recent created entries
    const transactions = await Transaction.find().limit(50).sort({createdOn: -1});
    res.status(200).json(transactions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
