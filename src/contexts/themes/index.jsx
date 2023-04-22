import React, { useState, useContext, createContext, useEffect } from "react";

const ThemeContext = createContext();

const themes = {
    light: { 'primColor': '#ffffff', 'SecColor': '#151723', 'cardText': '8ed1fc', 'primText': '#333333', 'secText': '#8ed1fc', 'primBG': '#E6E6E6', 'secBG': "#363842", 'accentColor': '#b685f2', 'darkMode': false },
    dark: { 'primColor': '#151723', 'SecColor': '#ffffff', 'cardText': '8ed1fc', 'primText': '#8ed1fc', 'secText': '#333333', 'primBG': '#363842', 'secBG': "#F2F2F2", 'accentColor': '#ff48fa', 'darkMode': true }
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);

    useEffect(() => {
        let savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(JSON.parse(savedTheme))
        }else {
            setTheme(themes.light)
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);