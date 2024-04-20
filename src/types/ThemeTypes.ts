export interface ThemeType {
  primary: string;
  secondary: string;
  error: string;
  warning: string;
}

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}
