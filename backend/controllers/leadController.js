import Lead from "../models/leadModel.js";

export const createLead = async (req, res) => {
  try {
    const { name, phone } = req.body;

    if (!name?.trim()) {
      return res.status(400).json({ message: "Name is required." });
    }

    if (!phone?.trim()) {
      return res.status(400).json({ message: "Phone number is required." });
    }

    // Avoid storing the same number twice
    const existing = await Lead.findOne({ phone: phone.trim() }).lean();
    if (existing) {
      return res.status(200).json({ message: "Already registered.", duplicate: true });
    }

    const lead = await Lead.create({ name: name.trim(), phone: phone.trim() });

    res.status(201).json(lead);
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ message: messages.join(" ") });
    }
    console.error("createLead error:", error.message);
    res.status(500).json({ message: "Failed to save your details. Please try again." });
  }
};
