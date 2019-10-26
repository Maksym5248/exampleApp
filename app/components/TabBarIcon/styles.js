import { StyleSheet } from 'react-native';
import { dimensions } from '@styles';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: dimensions.indent * 1.5,
    paddingTop: dimensions.indent * 4,
  },
  bottomBorder: {
    height: 3,
    borderRadius: 2,
  },
});

export default styles;
