import * as React from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import {useFetchHoldingsForUserQuery} from './redux/StockHoldingService';
import UserHoldingItem from './UserHoldingItem';
import {Holding} from './stockHoldingTypes';
import {ThemeContext} from '../../styles/ThemeProvider';
import PortfolioSummary from '../../components/PortfolioSummary';

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
  const styles = useStockHoldingStyles();

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
      <PortfolioSummary userHoldings={data?.userHolding} />
    </View>
  );
};

export default StockHoldings;

const useStockHoldingStyles = () => {
  const {theme} = React.useContext(ThemeContext);
  return React.useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: theme.bgColor,
        },
      }),
    [theme.bgColor],
  );
};
