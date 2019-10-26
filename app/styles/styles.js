import { StyleSheet } from 'react-native';

import navigationStyles from './navigationStyles';
import textStyles from './textStyles';
import { indent } from './dimensions';

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
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginRightL: {
    marginRight: indent * 4,
  },
  marginLeftL: {
    marginLeft: indent * 4,
  },
  ...navigationStyles,
  ...textStyles,
});
