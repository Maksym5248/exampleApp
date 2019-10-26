import { StyleSheet } from 'react-native';
import fontSizes from './fontSizes';
import colors from './colors';
import headerStyle from './headerStyle';
import textStyle from './textStyle';

import * as dimensions from './dimensions';

const fillAllAbsolute = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};
export default StyleSheet.create({
  fillAll: {
    flex: 1,
  },
  fillAllAbsolute,
  flexGrow: {
    flexGrow: 1,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: colors.ghostWhite,
  },
  flexRow: {
    flexDirection: 'row',
  },
  title: {
    fontSize: fontSizes.xbig,
    color: colors.choccoLightBlack,
    textTransform: 'uppercase',
    lineHeight: dimensions.indent * 2.5,
    fontFamily: 'LeagueGothic-Regular',
    textAlign: 'center',
  },
  inputStyle: {
    fontFamily: 'AkzidenzGroteskPro-BoldCn',
    fontSize: fontSizes.large,
    color: colors.graffite,
  },
  ...headerStyle,
  ...textStyle,
});
