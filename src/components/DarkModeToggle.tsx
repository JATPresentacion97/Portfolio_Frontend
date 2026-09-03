import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from '../theme/Theme';
import { FaSun, FaMoon } from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
  html {
    color-scheme: ${(props) => props.theme.background === '#1c1714' ? 'dark' : 'light'};
    --theme-background: ${(props) => props.theme.background};
    --theme-color: ${(props) => props.theme.color};
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: background-color 0.3s linear, color 0.3s linear;
  }
`;

const Button = styled.button`
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  font-size: 1.5rem;
  border-radius: 0.25rem;
  transition: background-color 180ms ease, color 180ms ease;

  &:hover,
  &:focus-visible {
    background: ${(props) => props.theme.color};
    color: ${(props) => props.theme.background};
    outline: 3px solid ${(props) => props.theme.color};
    outline-offset: 3px;
  }
`;

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => { },
});

const useTheme = () => useContext(ThemeContext);

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = window.localStorage.getItem('dark-mode');
    if (savedTheme === 'true') return true;
    if (savedTheme === 'false') return false;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;
  });

  useEffect(() => {
    window.localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDarkMode ? darkTheme.background : lightTheme.background);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
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
