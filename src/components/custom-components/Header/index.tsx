import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
// @mui
import { Box, Tooltip, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// Components
import Logo from "../../standard-components/logo";
import useCustomTheme from "@/zustand/customTheme";

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const { themeData, fetchTheme, setDefaultTheme } = useCustomTheme();

  const [isCustomTheme, setIsCustomTheme] = useState(
    Cookies.get("isCustomTheme") === "true",
  );

  const handleThemeChange = (state: string) => {
    if (state === "default") {
      setDefaultTheme();
      setIsCustomTheme(false);
      Cookies.set("isCustomTheme", "false");
    } else {
      fetchTheme();
      setIsCustomTheme(true);
      Cookies.set("isCustomTheme", "true");
    }
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      position={"sticky"}
      borderBottom={`1px solid ${theme.palette.divider}`}
      p={2}
      top={0}
      zIndex={99}
      bgcolor={theme.palette.background.paper}
    >
      
      {/* // Logo  */}

      <Box sx={{ display: "flex", alignItems: "center", ml: { xs: 1, md: 5 } }}>
        <Tooltip title={themeData?.merchantName}>
          <Logo
            sx={{
              zIndex: 9,
              mr: 1,
            }}
          />
        </Tooltip>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: 18,
            display: { xs: "none", sm: "block" },
            fontWeight: 600,
          }}
          noWrap
          color="text.primary"
        >
          {themeData?.merchantName} Cart
        </Typography>
      </Box>


      {/* // Theme Button  */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          mr: { xs: 1, md: 5 },
          p: 0.5,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
        }}
      >
        <Button
          variant={!isCustomTheme ? "contained" : "outlined"}
          sx={{ width: 60, m: 0.5 }}
          onClick={() => handleThemeChange("default")}
        >
          <Typography variant="caption" sx={{ fontSize: 10 }}>
            Default
          </Typography>
        </Button>

        <Button
          variant={isCustomTheme ? "contained" : "outlined"}
          sx={{ width: 60, m: 0.5 }}
          onClick={() => handleThemeChange("custom")}
        >
          <Typography variant="caption" sx={{ fontSize: 10 }}>
            Random
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
