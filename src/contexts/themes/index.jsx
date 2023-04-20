import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

const themes = {
    light: {'primColor': '#ffffff', 'SecColor': '#151723', 'primText': '#333333', 'secText': '#8ed1fc', 'primBG': '#E6E6E6', 'secBG': "#363842", 'accentColor': '#FAD97F', 'darkMode': false},
    dark:  { 'primColor': '#151723', 'SecColor': '#ffffff', 'primText': '#8ed1fc', 'secText': '#333333', 'primBG': '#363842', 'secBG': "#F2F2F2", 'accentColor': '#FAD97F', 'darkMode': true }
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