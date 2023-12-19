import { create } from "zustand";
import axios from "axios";

// ----------------------- Types / Interfaces -----------------------

interface ProductData {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface ProductsAPIData {
  products: ProductData[];
  paymentMenthods: string[];
}

interface ProductDataState {
  productsData: ProductData[];
  paymentMenthods: string[];
  isLoading: boolean;
  fetchProductData: () => Promise<void>;
}

// ----------------------- Const Data -----------------------

const Get_Product_Data_Url =
  "https://groww-intern-assignment.vercel.app/v1/api/order-details";

// --------------------------------------------------

const useProductData = create<ProductDataState>((set) => ({
  productsData: [],
  paymentMenthods: [],
  isLoading: false,
  fetchProductData: async () => {
    try {
      set({ isLoading: true });
      const response = await axios.get<ProductsAPIData>(Get_Product_Data_Url);
      set({
        productsData: response.data.products,
        paymentMenthods: response.data.paymentMenthods,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useProductData;
