import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from '../styles/ThemeProvider';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  const styles = useHeaderStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const useHeaderStyles = () => {
  const {theme} = React.useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: theme.primary,
    },
    title: {
      color: 'white',
    },
  });
  return styles;
};
