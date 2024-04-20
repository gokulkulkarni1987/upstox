import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

interface StockHoldingsProps {}

const StockHoldings: React.FC<StockHoldingsProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Header title="Upstox" />
      <Text>StockHoldings</Text>
    </View>
  );
};

export default StockHoldings;

const styles = StyleSheet.create({
  container: {},
});
