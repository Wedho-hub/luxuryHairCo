import Order from "../models/orderModel.js";

const ALLOWED_PAYMENT_METHODS = new Set(["PayFast", "Yoco", "EFT", "WhatsApp"]);

export const createOrder = async (req, res) => {
  try {
    const { items, total, customerName, phone, address, paymentMethod } = req.body;

    // Input validation
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Order must contain at least one item." });
    }

    if (!customerName?.trim()) {
      return res.status(400).json({ message: "Customer name is required." });
    }

    if (!phone?.trim()) {
      return res.status(400).json({ message: "Phone number is required." });
    }

    if (!address?.trim()) {
      return res.status(400).json({ message: "Delivery address is required." });
    }

    if (!paymentMethod || !ALLOWED_PAYMENT_METHODS.has(paymentMethod)) {
      return res.status(400).json({
        message: `Payment method must be one of: ${[...ALLOWED_PAYMENT_METHODS].join(", ")}.`,
      });
    }

    if (typeof total !== "number" || total <= 0) {
      return res.status(400).json({ message: "Order total must be a positive number." });
    }

    const order = await Order.create({
      items,
      total,
      customerName: customerName.trim(),
      phone: phone.trim(),
      address: address.trim(),
      paymentMethod,
      paymentStatus: "pending",
    });

    res.status(201).json(order);
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ message: messages.join(" ") });
    }
    console.error("createOrder error:", error.message);
    res.status(500).json({ message: "Failed to create order. Please try again." });
  }
};
