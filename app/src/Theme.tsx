
import { createContext, useContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import { colors } from '@mui/material';


type ColorModeContextType = {
  mode: 'light' | 'dark';
  toggleColorMode: () => void;
  manual: boolean;
};

const ThemeContext = createContext<ColorModeContextType | undefined>(undefined);


export const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
  const [manual, setManual] = useState<boolean>(false);
  const toggleColorMode = () => {
    setManual(true)
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => {
    return createTheme({ palette: { mode, secondary: { main: colors.lightBlue['A100'] } } })
  }, [mode]);
  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode, manual }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppColorMode = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};