import {AppThemeProvider } from "../contexts/ThemeContext";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <AppThemeProvider>
            <Outlet/>
        </AppThemeProvider>
    );
};
export default Root;
