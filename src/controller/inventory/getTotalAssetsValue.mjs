import { getTotalAssetValue } from "../../services/inventory/getInventoryServices.mjs";

export const totalAssetValue = async (req, res) => {
  try {
    const result = await getTotalAssetValue();
    res.status(200).json({ msg: " success fetching total asset value", result });
  } catch (error) {
    res.status(500).json({ msg: " error fetching total assets value" });
  }
};
