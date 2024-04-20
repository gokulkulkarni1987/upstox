import * as React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  StyleSheet,
  TextStyle,
} from 'react-native';

export const TypoGraphy = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  H4: 'H4',
  P1: 'P1',
  P2: 'P2',
  P3: 'P3',
} as const;

type Keys = keyof typeof TypoGraphy;

type ValuesTypes = (typeof TypoGraphy)[Keys];

interface TextProps extends RNTextProps {
  type?: ValuesTypes;
}

const Text: React.FC<TextProps> = ({type = TypoGraphy.P1, style, children}) => {
  const styles = useTextStyles(type, style);
  return <RNText style={styles.text}>{children}</RNText>;
};

export default Text;

const useTextStyles = (type: ValuesTypes, style: StyleProp<TextStyle>) => {
  return React.useMemo(
    () =>
      StyleSheet.create({
        text: {
          ...typoGraphyStyles[type],
          ...(style as Object),
        },
      }),
    [type, style],
  );
};

const typoGraphyStyles = StyleSheet.create({
  H1: {
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 41,
  },
  H2: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 33,
  },
  H3: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
  },
  H4: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 19,
  },
  P1: {
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 20,
  },
  P2: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 19,
  },
  P3: {
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 14,
  },
});
