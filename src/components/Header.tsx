import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeContext} from '../styles/ThemeProvider';
import Text, {TypoGraphy} from './Text';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  const styles = useHeaderStyles();
  return (
    <View style={styles.container}>
      <Text type={TypoGraphy.H2} style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const useHeaderStyles = () => {
  const {theme} = React.useContext(ThemeContext);

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        container: {
          paddingVertical: 10,
          paddingHorizontal: 10,
          backgroundColor: theme.primary,
        },
        title: {
          color: 'white',
        },
      }),
    [theme.primary],
  );
  return styles;
};
