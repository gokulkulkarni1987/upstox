/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StockHoldings from './src/screens/StockHoldings';
import {ThemeContext} from './src/styles/ThemeProvider';
import {lightTheme} from './src/styles/theme';
import {ThemeContextType} from './src/types/ThemeTypes';

function App(): React.JSX.Element {
  const [theme, _setTheme] = useState<ThemeContextType>({
    theme: lightTheme,
    setTheme: () => {},
  });
  return (
    <SafeAreaView style={styles.container}>
      <ThemeContext.Provider value={theme}>
        <StockHoldings />
      </ThemeContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
