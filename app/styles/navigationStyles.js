import { Platform } from 'react-native';

import { indent } from './dimensions';
import colors from './colors';

const shadow = Platform.select({
  ios: {
    shadowColor: colors.inert,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      height: 7,
      width: 0,
    },
  },
  android: {
    elevation: 5,
  },
});

export default {
  tabBar: {
    marginHorizontal: indent * 2,
    borderTopWidth: 0,
    borderTopLeftRadius: indent * 2,
    borderTopRightRadius: indent * 2,
    height: indent * 15,
    ...shadow,
  },
};
