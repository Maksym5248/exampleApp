// @flow
import React, {
  useState, useCallback, memo,
} from 'react';
import { Animated, View, Easing } from 'react-native';
import FastImage from 'react-native-fast-image';
import { type ImageStyle, type ViewStyle } from '@types';

import { Location, User } from '@assets/svg';

import s from './styles';
import useImageResizing from './useImageResizing';

const AnimatedImage = Animated.createAnimatedComponent(FastImage);

export type PropTypes = {
  uri?: string,
  isAnimated?: boolean;
  isAnimatingOpacity?: boolean;
  isMin?: boolean;
  isPlaceholder?: boolean;
  defaultUri?: string,
  resizeMode?: 'cover' | 'contain';
  containerStyle?: ViewStyle,
  style?: ImageStyle;
  size?: 'native' | 'small' | 'medium' | 'large';
  resize?: [number, number]; // [height, width]
  placeholder?: 'location' | 'user' | 'none';
}


const placeholders = {
  location: Location,
  user: User,
  none: null,
};


function Image({
  isAnimated,
  uri,
  size = 'native',
  resize = [1, 1],
  containerStyle,
  style,
  placeholder = 'location',
  resizeMode = 'cover',
  isAnimatingOpacity = true,
  isMin = true,
  isPlaceholder = true,
  ...props
}: PropTypes) {
  const [opacity] = useState(new Animated.Value(isAnimatingOpacity ? 0 : 1));
  const [isError, setError] = useState(false);

  const {
    maxUri,
    minUri,
  } = useImageResizing({
    uri, size, resize, isError,
  });

  const onLoad = useCallback(() => {
    if (isAnimatingOpacity) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    }
  }, [isAnimatingOpacity, opacity]);

  const onError = useCallback(() => {
    setError(true);
  }, []);

  const Container = isAnimated ? Animated.View : View;
  const Placeholder = placeholders[placeholder];

  return (
    <Container
      style={[s.container, containerStyle]}
    >
      {!!Placeholder && isPlaceholder && (
        <Placeholder
          width="100%"
          height="100%"
          style={s.placeholder}
        />
      )}
      {!!minUri && isMin && (
        <AnimatedImage
          source={{ uri: minUri }}
          style={[s.img, style]}
          resizeMode={resizeMode}
          {...props}
        />
      )}
      <AnimatedImage
        style={[
          s.img,
          style,
          { opacity },
        ]}
        source={{
          uri: maxUri,
          priority: FastImage.priority.high,
        }}
        onLoad={onLoad}
        resizeMode={resizeMode}
        onError={onError}
        {...props}
      />
    </Container>
  );
}

export default memo<PropTypes>(Image);
