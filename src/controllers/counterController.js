import { Distributer } from "../models/distSchema.js";
import { Order } from "../models/orderSchema.js";
import { Product } from "../models/productSchema.js";

let adminDashboardCounts = async (req, res) => {
  try {
    // Count documents in each collection
    const [distributerCount, orderCount, productCount] = await Promise.all([
      Distributer.countDocuments(),
      Order.countDocuments(),
      Product.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      data: {
        Distributers: distributerCount,
        Orders: orderCount,
        Products: productCount,
      },
    });
  } catch (error) {
    console.error("Error fetching dashboard counts:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard counts",
      error: error.message,
    });
  }
};

export { adminDashboardCounts };
