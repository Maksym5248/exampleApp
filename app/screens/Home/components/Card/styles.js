import { StyleSheet } from 'react-native';

import { dimensions, colors } from '@styles';

const { indent } = dimensions;

export const AVATAR_SIZE = dimensions.indent * 8;
export const VIDEO_PLACEHOLDER_SIZE = dimensions.indent * 15;

const VIDEO_HEIGHT = dimensions.indent * 38;
export const VIDEO_GRADIENT_SIZE = dimensions.indent * 13;
const VIDEO_BUTTON_SIZE = VIDEO_GRADIENT_SIZE + dimensions.indent * 7;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: '100%',
    marginBottom: indent * 4,
    borderRadius: indent,
  },
  headerContainer: {
    flexDirection: 'row',
    padding: indent * 5,
    paddingBottom: indent * 4,
  },
  textContainer: {
    flexDirection: 'row',
    paddingHorizontal: indent * 5,
    paddingBottom: indent * 3,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
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

  // video content
  containerButtonGradient: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButtonGradientBackground: {
    opacity: 0.5,
    backgroundColor: colors.white,
    position: 'absolute',
    height: VIDEO_BUTTON_SIZE,
    width: VIDEO_BUTTON_SIZE,
    borderRadius: VIDEO_BUTTON_SIZE / 2,
  },
  containerGradient: {
    overflow: 'hidden',
    height: VIDEO_GRADIENT_SIZE,
    width: VIDEO_GRADIENT_SIZE,
    borderRadius: VIDEO_GRADIENT_SIZE / 2,
  },
  contentGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    marginLeft: indent,
  },
  videoPreviewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: VIDEO_HEIGHT,
    width: '100%',
  },
  videoPreview: {
    position: 'absolute',
    height: VIDEO_HEIGHT,
    left: 0,
    right: 0,
  },

  // imageContent
  imageContent: {
    overflow: 'hidden',
    width: '49%',
    height: dimensions.indent * 38,
  },
  borderImageRight: {
    borderTopRightRadius: indent,
    borderBottomRightRadius: indent,
  },
  borderImageLeft: {
    borderTopLeftRadius: indent,
    borderBottomLeftRadius: indent,
  },
});

export default styles;
