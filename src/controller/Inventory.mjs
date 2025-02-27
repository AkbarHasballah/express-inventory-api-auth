import prisma from '../utils/prisma.mjs';

// Get Inventory Statistics
export const getInventoryStats = async (req, res) => {
  try {
    const totalProducts = await prisma.product.count();
    const totalCategories = await prisma.category.count();

    res.json({ totalProducts, totalCategories });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching inventory stats' });
  }
};

// Get Products with Low Stock
export const getLowStockProducts = async (req, res) => {
  try {
    const lowStockProducts = await prisma.product.findMany({
      where: {
        quantity: { lt: 5 },  // Products with quantity less than 5
      },
    });

    res.json(lowStockProducts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching low stock products' });
  }
};
export const getTotalAssetValue = async (req, res) => {
    try {
      const totalValue = await prisma.product.aggregate({
        _sum: {
          price: true,
        },
      });
  
      const totalQuantity = await prisma.product.aggregate({
        _sum: {
          quantity: true,
        },
      });
  
      const totalAssets = totalValue._sum.price * totalQuantity._sum.quantity;
  
      return res.status(200).json({
        message: "Total nilai aset perusahaan berhasil dihitung",
        totalAssets,
      });
    } catch (error) {
      console.error("Error menghitung total aset:", error);
      return res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
  };