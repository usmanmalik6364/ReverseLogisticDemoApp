import React from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { observer } from "mobx-react-lite";
import { useStore } from "../app/stores/store";

const ThemeToggle: React.FC = () => {
  const { commonStore } = useStore();
  const theme = useTheme();

  const toggleTheme = () => {
    commonStore.setTheme(commonStore.theme === "light" ? "dark" : "light");
  };

  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default observer(ThemeToggle);
