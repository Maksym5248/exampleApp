import { Platform } from 'react-native';
import colors from './colors';
import textStyle from './textStyle';

const headerBorder = {
  backgroundColor: colors.white,
  ...Platform.select({
    ios: {
      borderBottomWidth: 0,
    },
    android: {
      elevation: 0,
    },
  }),
};

const headerStyle = {
  headerStyle: headerBorder,
  headerDarkStyle: {
    ...headerBorder,
    backgroundColor: colors.graffite,
  },
  headerTitleDarkStyle: {
    textTransform: 'uppercase',
    color: colors.white,
    ...textStyle.caption12,
  },
};

export default headerStyle;
