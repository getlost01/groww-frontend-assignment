import { create } from 'zustand';
import axios from 'axios';

// ----------------------- Types / Interfaces -----------------------

interface ThemeData {
  merchantName: string;
  merchantLogo: string;
  theme: {
    '--background': string;
    '--foreground': string;
    '--primary': string;
    '--primary-foreground': string;
  };
}

interface ThemeState {
  data: ThemeData | null;
  fetchTheme: () => Promise<void>;
}

// ----------------------- Const Data -----------------------

const defaultTheme: ThemeData = {
    "merchantName": "GROWW",
    "merchantLogo": "https://groww.in/groww-logo-270.png",
    "theme": {
      "--background": "hsl(20, 14.3%, 4.1%)",
      "--foreground": "hsl(0, 0%, 95%)",
      "--primary": "hsl(142.1, 70.6%, 45.3%)",
      "--primary-foreground": "hsl(144.9, 80.4%, 10%)"
    }
};

const GET_THEME_API = 'https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata';

// --------------------------------------------------

const useCustomTheme = create<ThemeState>((set) => ({
  data: null,
  fetchTheme: async () => {
    try {
      const response = await axios.get<ThemeData>(GET_THEME_API);
      set({ data: response.data });
    } catch (error) {
      console.error('Error fetching theme:', error);
      set({ data: defaultTheme });
    }
  },
}));

export default useCustomTheme;
