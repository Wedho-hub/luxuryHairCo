import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        productId: String,
        productName: String,
        price: Number,
        quantity: Number,
      },
    ],
    total: Number,
    customerName: String,
    phone: String,
    address: String,
    paymentMethod: String,
    paymentStatus: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);