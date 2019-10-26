// @flow
import React, { useState, useCallback, memo } from 'react';
import {
  Animated,
  Easing,
  View,
  ViewPropTypes,
  Image as ImageRN,
} from 'react-native';
import T from 'prop-types';

import Icon from '../Icon';

import s from './styles';

const AnimatedImage = Animated.createAnimatedComponent(ImageRN);

function Image({
  uri,
  resizeMode = 'cover',
  placeholderSize = 50,
  containerStyle,
  style,
  ...props
}) {
  const [opacity] = useState(new Animated.Value(0));

  const onLoad = useCallback(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return (
    <Animated.View style={[s.container, containerStyle]}>
      <View style={s.placeholder}>
        <Icon type="Entypo" name="image" size={placeholderSize} />
      </View>
      <AnimatedImage
        style={[s.img, style, { opacity }]}
        source={{
          uri,
        }}
        onLoad={onLoad}
        resizeMode={resizeMode}
        {...props}
      />
    </Animated.View>
  );
}

Image.propTypes = {
  uri: T.string,
  placeholderSize: T.number,
  resizeMode: T.oneOf(['cover', 'contain']),
  containerStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
};

export default memo(Image);
