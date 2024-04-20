import * as React from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import {useFetchHoldingsForUserQuery} from './redux/StockHoldingService';
import UserHoldingItem from './UserHoldingItem';
import {Holding} from './stockHoldingTypes';

interface StockHoldingsProps {
  userId: string;
}

const StockHoldings: React.FC<StockHoldingsProps> = ({userId}) => {
  const {isFetching, isError, isSuccess, data} = useFetchHoldingsForUserQuery(
    userId,
    {
      refetchOnMountOrArgChange: true,
    },
  );

  console.log({
    isFetching,
    isError,
    isSuccess,
  });

  const renderItem: ListRenderItem<Holding> = React.useCallback(
    ({item, index}) => <UserHoldingItem item={item} index={index} />,
    [],
  );

  const keyExtractor = React.useCallback((item: Holding) => item.symbol, []);

  return (
    <View style={styles.container}>
      <Header title="Upstox Holding" />
      <FlatList
        data={data?.userHolding}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default StockHoldings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
