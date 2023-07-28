import CssBaseline from "@mui/material/CssBaseline";
import { FiltrosDrawer } from "../components/filtros/Index";
import { AppThemeProvider } from "../contexts/ThemeContext";
import { Outlet } from "react-router-dom";
import ToogleThemeButton from "../components/toogleTheme";

const Root = () => {
    return (
        <AppThemeProvider>
            <ToogleThemeButton/>
            <CssBaseline/>
            <FiltrosDrawer/>
            <Outlet/>
        </AppThemeProvider>
    );
};
export default Root;
