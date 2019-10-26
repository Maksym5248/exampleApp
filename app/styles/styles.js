import { StyleSheet, Platform } from 'react-native';

import navigationStyles from './navigationStyles';
import textStyles from './textStyles';
import { indent } from './dimensions';
import colors from './colors';

const shadowCard = Platform.select({
  ios: {
    shadowColor: colors.inert,
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowOffset: {
      height: 4,
      width: 0,
    },
  },
  android: {
    elevation: 2,
  },
});

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
  marginRightS: {
    marginRight: indent * 2,
  },
  marginLeftM: {
    marginLeft: indent * 3,
  },
  paddingTopL: {
    padding: indent * 4,
  },
  paddingL: {
    padding: indent * 4,
  },
  paddingHorizontalL: {
    paddingHorizontal: indent * 4,
  },
  shadowCard,
  ...navigationStyles,
  ...textStyles,
});
