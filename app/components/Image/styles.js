import { StyleSheet } from 'react-native';
import { colors, dimensions } from '@styles';

const styles = StyleSheet.create({
  container: {
    height: dimensions.indent * 4,
    backgroundColor: colors.gray,
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.transparent,
  },
  placeholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
