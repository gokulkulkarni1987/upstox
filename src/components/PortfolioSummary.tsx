import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import * as React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Holding} from '../features/stock-holding/stockHoldingTypes';
import {roundOffValues} from '../utils/utils';
import LabelValue from './LabelValue';

interface PortfolioSummaryProps {
  userHoldings?: Array<Holding>;
}

const BottomSheetOpenHandle = ({
  bottomSheetRef,
}: {
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
}) => {
  const handleBottomSheetClosePressed = React.useCallback(() => {
    bottomSheetRef?.current?.close();
  }, [bottomSheetRef]);
  return (
    <Pressable
      onPress={handleBottomSheetClosePressed}
      style={styles.handleContainer}>
      <Icon name={'chevron-down'} size={24} color={'black'} />
    </Pressable>
  );
};

const PortfolioSummary: React.FC<PortfolioSummaryProps> = ({userHoldings}) => {
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const snapPoints = React.useMemo(() => ['20%'], []);
  const [index, setIndex] = React.useState(-1);

  const currentTotal = userHoldings?.reduce(
    (prevVal, currentVal) => prevVal + currentVal.ltp * currentVal.quantity,
    0,
  );
  const totalInvestments = userHoldings?.reduce(
    (prevVal, currentVal) =>
      prevVal + currentVal.avgPrice * currentVal.quantity,
    0,
  );
  const totalPNL = (currentTotal || 0) - (totalInvestments || 0);
  const todaysPNL = userHoldings?.reduce(
    (prevVal, currentVal) =>
      prevVal + (currentVal.close - currentVal.ltp) * currentVal.quantity,
    0,
  );

  const handleOpenBottomSheet = React.useCallback(() => {
    bottomSheetRef?.current?.snapToIndex(0);
  }, []);

  const handleSheetChanges = React.useCallback((index: number) => {
    setIndex(index);
  }, []);

  const handleBottomSheetComponent = React.useCallback(
    () => <BottomSheetOpenHandle bottomSheetRef={bottomSheetRef} />,
    [],
  );

  return (
    <>
      {index === -1 && (
        <Pressable onPress={handleOpenBottomSheet} style={styles.container}>
          <Icon name={'chevron-up'} size={24} color={'black'} />
          <LabelValue
            label="Profit & Loss"
            value={`₹ ${roundOffValues(totalPNL)}`}
          />
        </Pressable>
      )}
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={snapPoints}
        handleComponent={handleBottomSheetComponent}
        enableHandlePanningGesture={false}
        index={-1}>
        <BottomSheetView style={styles.contentContainer}>
          <LabelValue
            label="Current Value"
            value={`₹ ${roundOffValues(currentTotal || 0)}`}
          />
          <LabelValue
            label="Total Investment"
            value={`₹ ${roundOffValues(totalInvestments || 0)}`}
          />
          <LabelValue
            label="Today's Profit & Loss"
            value={`₹ ${roundOffValues(todaysPNL || 0)}`}
          />
          <LabelValue
            label="Profit & Loss"
            value={`₹ ${roundOffValues(totalPNL)}`}
            style={styles.profitLoss}
          />
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingTop: 5,
  },
  value: {
    textAlign: 'right',
  },
  innerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  handleContainer: {
    alignItems: 'center',
    paddingTop: 5,
  },
  profitLoss: {
    marginTop: 15,
  },
});

export default PortfolioSummary;
