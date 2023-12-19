import { darken, lighten } from "@mui/system";
import { createTheme } from "@mui/material/styles";

// ----------------------- Types / Interfaces -----------------------

interface ThemeData {
  merchantName: string;
  merchantLogo: string;
  theme: {
    "--background": string;
    "--foreground": string;
    "--primary": string;
    "--primary-foreground": string;
  };
}

// --------------------------------------------------

// setting our custom theme colors from the merchant api response
// and returning a theme object to be used in the app with MUI
// curresponding light and dark colors are calculated using MUI's 
// lighten and darken functions

export const getTheme = (themeData: ThemeData) => {
  const theme = createTheme({
    palette: {
      background: {
        default: themeData?.theme["--background"],
        paper: lighten(themeData?.theme["--background"], 0.06),
      },
      text: {
        primary: lighten(themeData?.theme["--foreground"], 0.12),
        secondary: lighten(themeData?.theme["--foreground"], 0.36),
        disabled: lighten(themeData?.theme["--foreground"], 0.6),
      },
      primary: {
        light: lighten(themeData?.theme["--primary"], 0.6),
        main: themeData?.theme["--primary"],
        dark: darken(themeData?.theme["--primary"], 0.5),
      },
      secondary: {
        light: lighten(themeData?.theme["--primary-foreground"], 0.36),
        main: lighten(themeData?.theme["--primary-foreground"], 0.12),
        dark: themeData?.theme["--primary-foreground"],
      },
      divider: lighten(themeData?.theme["--foreground"], 0.84),
    },
  });
  return theme;
};
