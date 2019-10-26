import { StyleSheet } from 'react-native';

import navigationStyles from './navigationStyles';
import textStyle from './textStyle';

export default StyleSheet.create({
  fillAll: {
    flex: 1,
  },
  fillAllAbsolute: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  flexGrow: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
  ...navigationStyles,
  ...textStyle,
});
