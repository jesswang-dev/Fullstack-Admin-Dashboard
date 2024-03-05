import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    expense: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  {
    toJSON: { setters: true, getters: true },
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;