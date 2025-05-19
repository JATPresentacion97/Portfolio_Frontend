import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from '../theme/Theme';
import { FaSun, FaMoon } from 'react-icons/fa';

// Global styles that respond to the current theme
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: all 0.3s linear;  // Smooth transition on theme change
  }
`;

// Styled button component for the toggle switch
const Button = styled.button`
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  font-size: 1.5rem;
`;

// Define the shape of the ThemeContext value
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Create a Context with default values
const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => { },
});

// Custom hook to consume the theme context easily
export const useTheme = () => useContext(ThemeContext);

// Dark mode toggle button component
const DarkModeToggle: React.FC = () => {
  // Get current theme state and toggle function from context
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} aria-label="Toggle Dark Mode">
      {/* Show sun icon if dark mode is enabled, moon if light mode */}
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

interface ThemeProviderWrapperProps {
  children: ReactNode;  // Accept any React nodes as children
}

// Provider component to wrap your app and manage theme state
export const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => {
  // Initialize theme state from localStorage or default to false (light mode)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('dark-mode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Save the theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Function to toggle between dark and light modes
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    // Provide the theme state and toggle function to the component tree
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {/* ThemeProvider injects theme variables into styled-components */}
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle /> {/* Apply global styles based on the current theme */}
        {children} {/* Render child components */}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default DarkModeToggle;
