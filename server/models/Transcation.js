import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    buyer: {
      type: String,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { setters: true, getters: true },
  }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;