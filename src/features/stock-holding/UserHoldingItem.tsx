import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Holding} from './stockHoldingTypes';
import Text, {TypoGraphy} from '../../components/Text';
import {roundOffValues} from '../../utils/utils';

interface UserHoldingItemProps {
  item: Holding;
  index: number;
}

const UserHoldingItem: React.FC<UserHoldingItemProps> = ({item}) => {
  const {symbol, ltp, quantity, avgPrice} = item;
  const currentValue = ltp * quantity;
  const investmentValue = avgPrice * quantity;
  const pl = currentValue - investmentValue;
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text type={TypoGraphy.H3}>{symbol}</Text>
        <Text type={TypoGraphy.P2}>
          LTP: <Text type={TypoGraphy.H4}>₹ {ltp}</Text>
        </Text>
      </View>
      <View style={styles.innerContainer}>
        <Text>{quantity}</Text>
        <Text type={TypoGraphy.P2}>
          P/L: <Text type={TypoGraphy.H4}>₹ {roundOffValues(pl)}</Text>
        </Text>
      </View>
    </View>
  );
};

export default UserHoldingItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    backgroundColor: 'white',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});
