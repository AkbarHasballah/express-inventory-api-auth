import { getTransactions } from "../../repositories/transaction/transactionRepository.mjs";

export const transactions = async () => {
  try {
    return await getTransactions();
  } catch (error) {
    throw new Error(error.message);
  }
};
