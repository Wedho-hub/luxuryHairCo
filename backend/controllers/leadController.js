import Lead from "../models/leadModel.js";

export const createLead = async (req, res) => {
  try {
    const { name, phone } = req.body;

    const lead = await Lead.create({ name, phone });

    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};