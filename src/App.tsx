import React from 'react';
import LandingPage from './components/LandingPage';
import { ThemeProviderWrapper } from './components/DarkModeToggle';

const App: React.FC = () => {
  return (
    <ThemeProviderWrapper>
      <LandingPage />
    </ThemeProviderWrapper>
  );
};

export default App;
