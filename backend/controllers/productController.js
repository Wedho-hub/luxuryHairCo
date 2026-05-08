import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().lean();

    // Products rarely change — cache aggressively on CDN/proxy edges.
    // stale-while-revalidate keeps the Render response fast.
    res.setHeader(
      "Cache-Control",
      "public, max-age=3600, stale-while-revalidate=86400"
    );

    res.json(products);
  } catch (error) {
    console.error("getProducts error:", error.message);
    res.status(500).json({ message: "Failed to fetch products. Please try again." });
  }
};
