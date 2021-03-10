import {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';

interface Color {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  fourthColor: string;
  colorText: string;
  default: 'white' | 'black';
  white: '#fff';
  black: '#000';
}

interface ThemesContextData {
  handleToggleTheme(): void;
  colors: Color;
}

const ThemesContext = createContext<ThemesContextData>({} as ThemesContextData);

const ThemesProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const themeStorage = localStorage.getItem('@theme');

    if (themeStorage === 'light') {
      return 'light';
    }

    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('@theme', theme);
  }, [theme]);

  const handleToggleTheme = useCallback(() => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [theme]);

  const colors = useMemo<Color>(() => {
    if (theme === 'light') {
      return {
        primaryColor: '#e5e5e5',
        secondaryColor: '#dedede',
        tertiaryColor: '#617480',
        fourthColor: '#dce2e6',
        colorText: '#617480',
        default: 'white',
        black: '#000',
        white: '#fff',
      };
    }
    return {
      primaryColor: '#424242',
      secondaryColor: '#121212',
      tertiaryColor: '#bdbdbd',
      fourthColor: '#636363',
      colorText: '#444',
      default: 'black',
      black: '#000',
      white: '#fff',
    };
  }, [theme]);

  return (
    <ThemesContext.Provider value={{ handleToggleTheme, colors }}>
      {children}
    </ThemesContext.Provider>
  );
};

function useTheme(): ThemesContextData {
  const context = useContext(ThemesContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemesProvider');
  }

  return context;
}

export { ThemesProvider, useTheme };
