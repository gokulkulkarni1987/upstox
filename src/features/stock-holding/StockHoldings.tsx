import * as React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {useFetchHoldingsForUserQuery} from './redux/StockHoldingService';
import UserHoldingItem from './UserHoldingItem';
import {Holding} from './stockHoldingTypes';
import {ThemeContext} from '../../styles/ThemeProvider';
import PortfolioSummary from '../../components/PortfolioSummary';
import Text from '../../components/Text';

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

  const renderViewByState = React.useMemo(() => {
    if (isFetching) {
      return (
        <View style={styles.centerContainer}>
          <ActivityIndicator />
        </View>
      );
    }
    if (isError) {
      return (
        <View style={styles.centerContainer}>
          <Text>Error while fetching data!</Text>
        </View>
      );
    }
    return (
      <>
        <FlatList
          data={data?.userHolding}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
        <PortfolioSummary userHoldings={data?.userHolding} />
      </>
    );
  }, [
    data?.userHolding,
    isError,
    isFetching,
    keyExtractor,
    renderItem,
    styles.centerContainer,
  ]);

  return (
    <View style={styles.container}>
      <Header title="Upstox Holding" />
      {renderViewByState}
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
        centerContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }),
    [theme.bgColor],
  );
};
