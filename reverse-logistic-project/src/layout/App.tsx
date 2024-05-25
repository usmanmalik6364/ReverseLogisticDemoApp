import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { observer } from "mobx-react-lite";
import ProductDashboard from "../app/dashboard/ProductsDashboard";
import { useStore } from "../app/stores/store";
import darkTheme from "../app/themes.ts/darkTheme";
import lightTheme from "../app/themes.ts/lightTheme";
import NavBar from "./NavBar";


const App: React.FC = () => {
  const { commonStore } = useStore();
  const theme = commonStore.theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <ProductDashboard />
    </ThemeProvider>
  );
};

export default observer(App);
