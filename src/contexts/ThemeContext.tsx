import {
    createContext,
    useState,
    useCallback,
    useMemo,
    useContext,
} from "react";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "../styles/themes/theme__dark";
import lightTheme from "../styles/themes/theme__light";


interface IthemeContextData {
    themeNameState: "light" | "dark";
    ToogleName: () => void;
}
interface AppThemeProviderProps {
    children: React.ReactNode;
}

const ThemeContext = createContext({} as IthemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
};

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
    const [themeNameState, setToogleNameState] = useState<"light" | "dark">("dark");

    const ToogleName = useCallback(() => {
        setToogleNameState((OldThemeName) =>
            OldThemeName === "dark" ? "light" : "dark");
    }, []);

    const theme = useMemo(() => {
        if (themeNameState === "dark") return darkTheme;
        return lightTheme ;
    }, [themeNameState]);

    return (
        <ThemeContext.Provider value={{ themeNameState, ToogleName }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
