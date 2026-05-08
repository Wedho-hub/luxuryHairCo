import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 150 },
    tier: { type: String, trim: true, maxlength: 50 },
    description: { type: String, trim: true, maxlength: 500 },
    length: { type: Number, required: true, min: 1, max: 72 },
    texture: { type: String, required: true, trim: true, maxlength: 80 },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
