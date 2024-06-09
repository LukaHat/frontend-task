import axios from "axios";
import { ProductInfo } from "../types";

const BASE_URL = "../products.json";

export const getAll = async (): Promise<ProductInfo[]> => {
  try {
    const resp = await axios.get(BASE_URL);
    const products = resp.data.products;
    console.log(products);
    return products;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
