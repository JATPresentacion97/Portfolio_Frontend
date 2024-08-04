import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from '../theme/Theme';
import { FaSun, FaMoon } from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: all 0.3s linear;
  }
`;

const Button = styled.button`
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  font-size: 1.5rem;
`;

const ThemeContext = createContext<{
  isDarkMode: boolean;
  toggleTheme: () => void;
}>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('dark-mode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default DarkModeToggle;
