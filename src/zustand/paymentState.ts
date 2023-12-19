import { create } from "zustand";

// ----------------------- Types / Interfaces -----------------------

interface ProductData {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface PaymentData {
  amount: number;
  status: string;
  paymentMode: string;
  transactionId: string;
  transactionTime: string;
}

interface PaymentState {
  paymentData: PaymentData;
  productsData: ProductData[];
  intializeTransaction: (
    transactionId: string,
    transactionTime: string,
    productsData: ProductData[],
    amount: number,
  ) => void;
  setPaymentMode: (paymentMode: string) => void;
  setPaymentStatus: (status: string) => void;
}

// --------------------------------------------------

const usePaymentState = create<PaymentState>((set) => ({
  paymentData: {
    amount: 0,
    status: "",
    paymentMode: "",
    transactionId: "",
    transactionTime: "",
  },
  productsData: [],
  intializeTransaction: (
    transactionId,
    transactionTime,
    productsData,
    amount,
  ) => {
    set({
      paymentData: {
        amount,
        status: "pending",
        paymentMode: "",
        transactionId,
        transactionTime,
      },
      productsData,
    });
  },
  setPaymentMode: (paymentMode) =>
    set((state) => ({
      paymentData: {
        ...state.paymentData,
        paymentMode,
      },
    })),
  setPaymentStatus: (status) =>
    set((state) => ({
      paymentData: {
        ...state.paymentData,
        status,
      },
    })),
}));

export default usePaymentState;