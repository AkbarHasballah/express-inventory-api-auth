import { createTransaction } from "../../services/transaction/postTransactionServices.mjs";

export const postTransaction = async (req, res) => {
  const { productId, type, quantity, price } = req.body;
  try {
    const result = await createTransaction(productId, type, quantity, price);
    res.status(200).json({ msg: "Transaction created successfully", result });
  } catch (error) {
    res.status(500).json({ message: "Error creating transaction" });
  }
};
