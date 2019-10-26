// @flow
import React, {
  memo, type Node,
} from 'react';
import { View } from 'react-native';
import FastImage, { type FastImageSource } from 'react-native-fast-image';
import { type ImageStyle, type ViewStyle } from '@types';

import s from './styles';

export type PropTypes = {
  source?: FastImageSource,
  resizeMode?: 'cover' | 'contain';
  containerStyle?: ViewStyle,
  style?: ImageStyle;
  children?: Node;
}

function Background({
  containerStyle,
  style,
  resizeMode = 'cover',
  children,
  ...props
}: PropTypes) {
  return (
    <View style={containerStyle}>
      <FastImage
        style={[
          s.img,
          style,
        ]}
        resizeMode={resizeMode}
        {...props}
      />
      {children}
    </View>
  );
}

export default memo<PropTypes>(Background);
