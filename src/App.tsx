import LandingPage from './components/LandingPage';
import { ThemeProviderWrapper } from './components/DarkModeToggle';

const App = () => {
  return (
    <ThemeProviderWrapper>
      <LandingPage />
    </ThemeProviderWrapper>
  );
};

export default App;
