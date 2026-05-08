import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    phone: { type: String, required: true, trim: true, maxlength: 25 },
  },
  { timestamps: true }
);

// Index for fast duplicate detection
leadSchema.index({ phone: 1 });

export default mongoose.model("Lead", leadSchema);
