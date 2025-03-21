import { transactions } from "../../services/transaction/getTransactionServices.mjs";

export const getTransactions = async (req,res) => {
  try {
    const result = await transactions();
    res.status(200).json({ msg: "success get Transaction", result });
  } catch (error) {
    res.status(500).json({ message: "error fetching transaction" });
  }
};
