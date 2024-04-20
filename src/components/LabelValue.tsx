import * as React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import Text, {TypoGraphy} from './Text';

interface LabelValueProps {
  label: string;
  value: string;
  style?: ViewStyle;
}

const LabelValue: React.FC<LabelValueProps> = ({label, value, style}) => {
  return (
    <View style={StyleSheet.flatten([styles.innerContainer, style])}>
      <Text type={TypoGraphy.H3} style={styles.flex}>
        {label}
      </Text>
      <View style={styles.flex}>
        <Text type={TypoGraphy.P2} style={styles.value}>
          {value}
        </Text>
      </View>
    </View>
  );
};

export default LabelValue;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  value: {
    textAlign: 'right',
  },
  innerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});
