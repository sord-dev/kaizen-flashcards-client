import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

const themes = {
    light: {'primColor': '#ffffff', 'SecColor': '#151723', 'cardText': '8ed1fc', 'primText': '#333333', 'secText': '#8ed1fc', 'primBG': '#E6E6E6', 'secBG': "#363842", 'accentColor': '#4f1469', 'linkForm' : '#000000',  'darkMode': false},
    dark:  { 'primColor': '#151723', 'SecColor': '#ffffff', 'cardText': '8ed1fc','primText': '#8ed1fc', 'secText': '#333333', 'primBG': '#363842', 'secBG': "#F2F2F2", 'accentColor': '#ff48fa', 'linkForm' : '#9833c4', 'darkMode': true }
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);