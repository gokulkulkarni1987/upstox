export interface ThemeType {
  primary: string;
  secondary: string;
  error: string;
  warning: string;
  bgColor: string;
}

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}
