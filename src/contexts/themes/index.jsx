import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({'primColor': '#ffffff', 'SecColor': '#151723', 'primText': '#333333', 'secText': '#8ed1fc', 'primBG': '#363842', 'secBG': "#F5F5F5", 'accentColor': '#FAD97F', 'darkMode': false});

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);