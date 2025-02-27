import prisma from '../utils/prisma.mjs';

// Create Transaction
export const createTransaction = async (req, res) => {
  const { productId, type, quantity, price } = req.body;

  if (!productId || !type || !quantity || !price) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  const totalValue = price * quantity;

  try {
    const transaction = await prisma.transaction.create({
      data: {
        productId,
        type,
        quantity,
        price,
        totalValue,
      },
    });

    // Update product quantity after transaction
    if (type === 'IN') {
      await prisma.product.update({
        where: { id: productId },
        data: { quantity: { increment: quantity } },
      });
    } else if (type === 'OUT') {
      await prisma.product.update({
        where: { id: productId },
        data: { quantity: { decrement: quantity } },
      });
    }

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Error creating transaction' });
  }
};

// Get all Transactions
export const getTransactions = async (req, res) => {
  try {
    const transactions = await prisma.transaction.findMany({
      include: { product: true },  // Include product details in the response
    });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions' });
  }
};
