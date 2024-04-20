/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {USER_ID} from './src/constants';
import StockHoldings from './src/features/stock-holding/StockHoldings';
import {persistor, store} from './src/redux/store';
import {ThemeContext} from './src/styles/ThemeProvider';
import {lightTheme} from './src/styles/theme';
import {ThemeContextType} from './src/types/ThemeTypes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  const [theme, _setTheme] = useState<ThemeContextType>({
    theme: lightTheme,
    setTheme: () => {},
  });
  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        <ThemeContext.Provider value={theme}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <StockHoldings userId={USER_ID} />
            </PersistGate>
          </Provider>
        </ThemeContext.Provider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
