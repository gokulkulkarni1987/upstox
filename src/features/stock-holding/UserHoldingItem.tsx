import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Holding} from './stockHoldingTypes';
import Text, {TypoGraphy} from '../../components/Text';

interface UserHoldingItemProps {
  item: Holding;
  index: number;
}

const UserHoldingItem: React.FC<UserHoldingItemProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text type={TypoGraphy.H3}>{item.symbol}</Text>
        <Text type={TypoGraphy.P2}>
          LTP: <Text type={TypoGraphy.H4}>₹ {item.ltp}</Text>
        </Text>
      </View>
      <View style={styles.innerContainer}>
        <Text>{item.quantity}</Text>
        <Text type={TypoGraphy.P2}>
          P/L: <Text type={TypoGraphy.H4}>₹ {item.avgPrice}</Text>
        </Text>
      </View>
    </View>
  );
};

export default UserHoldingItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    paddingVertical: 5,
    marginHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});
