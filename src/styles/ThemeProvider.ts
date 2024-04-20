import {createContext} from 'react';
import {ThemeContextType} from '../types/ThemeTypes';
import {lightTheme} from './theme';

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  setTheme: () => {},
});
