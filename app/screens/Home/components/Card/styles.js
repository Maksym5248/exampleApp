import { StyleSheet } from 'react-native';

import { dimensions, colors } from '@styles';

const { indent } = dimensions;

export const AVATAR_SIZE = dimensions.indent * 10;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: '100%',
    marginBottom: indent * 4,
    borderRadius: indent,
  },
  headerContainer: {
    flexDirection: 'row',
    padding: indent * 4,
  },
  contentContainer: {},
  footerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: indent * 4,
  },
  image: {
    overflow: 'hidden',
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 10,
    marginRight: indent * 3,
  },
});

export default styles;
