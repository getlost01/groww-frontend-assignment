import { create } from "zustand";
import axios from "axios";
import { parse } from "path";

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
  paymentMethods: string[];
}

interface ProductDataState {
  productsData: ProductData[];
  paymentMethods: string[];
  isLoading: boolean;
  isEmptyCart: boolean;
  isErrorOccured: boolean;
  totalPrice: number;
  fetchProductData: () => Promise<void>;
}

// ----------------------- Const Data -----------------------

const Get_Product_Data_Url =
  "https://groww-intern-assignment.vercel.app/v1/api/order-details";

// --------------------------------------------------

const useProductData = create<ProductDataState>((set) => ({
  productsData: [],
  paymentMethods: [],
  isLoading: true,
  isEmptyCart: false,
  isErrorOccured: false,
  totalPrice: 0,
  fetchProductData: async () => {
    try {
      set({ isLoading: true });
      const response = await axios.get<ProductsAPIData>(Get_Product_Data_Url);
      const totalPrice = response.data.products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
      set({
        isEmptyCart: response.data.products.length === 0,
        productsData: response.data.products,
        totalPrice: parseFloat(totalPrice.toFixed(2)),
        paymentMethods: response.data.paymentMethods,
      });
    } catch (error) {
      set({
        isEmptyCart: true,
        productsData: [],
        paymentMethods: [],
        totalPrice: 0,
        isErrorOccured: true,
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useProductData;
