import { createContext } from "react";
import { theme } from "./Theme";

export const themeContext = createContext(theme) ;

type themeContextProps = {
    children : React.ReactNode
}

export const ThemeContext =({children} : themeContextProps) => {

    return <themeContext.Provider value={theme}> { children}</themeContext.Provider>

}