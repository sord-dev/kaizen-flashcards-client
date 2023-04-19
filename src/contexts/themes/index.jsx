import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({'primColor': '#ffffff', 'SecColor': '#151723', 'primText': '#333333', 'secText': '#8ed1fc', 'primBG': '#E6E6E6', 'secBG': "#363842", 'accentColor': '#FAD97F', 'darkMode': false});

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);