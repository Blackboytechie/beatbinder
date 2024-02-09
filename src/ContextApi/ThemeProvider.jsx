// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const themes = {
    light: {
        backgroundColor: '#ffffff',
        textColor: '#000000',
        '--bg-color': '#ffffff',
        '--text-color': '#000000',
      },
      dark: {
        backgroundColor: '#333333',
        textColor: '#ffffff',
        '--bg-color': '#333333',
        '--text-color': '#ffffff',
      },
      custom: {
        backgroundColor: '#ffcc00',
        textColor: '#330099',
      },
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const selectTheme = themeName => {
    setTheme(themeName);
    console.log("theme",theme);
  };
const currentTheme = themes[theme]
  return (
    <ThemeContext.Provider value={{ theme, themes, toggleTheme, selectTheme,currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
