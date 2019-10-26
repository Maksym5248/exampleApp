// @flow
import React, { memo } from 'react';
import { View, ViewPropTypes } from 'react-native';
import {
  Svg,
  Defs,
  LinearGradient,
  Stop,
  Rect,
} from 'react-native-svg';
import T from 'prop-types';

import s from './styles';

function GradientLinear({
  onPress,
  firstColor,
  secondColor,
  containerStyle,
  style,
  children,
  y1 = 0,
  x2 = 0,
  y2 = 0,
  x1 = 0,
  opacity = 1,
  width,
  height,
}) {
  return (
    <View
      onPress={onPress}
      style={[s.container, containerStyle, { width, height }]}
    >
      <View style={[s.svgContainer, { width, height }]}>
        <Svg
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}
        >
          <Defs>
            <LinearGradient
              gradientUnits="userSpaceOnUse"
              id="grad"
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
            >
              <Stop
                offset="0%"
                stopColor={firstColor}
                stopOpacity="1"
              />
              <Stop
                offset="100%"
                stopColor={secondColor}
                stopOpacity="1"
              />
            </LinearGradient>
          </Defs>
          <Rect
            height={height}
            width={width}
            opacity={opacity}
            fill="url(#grad)"
          />
        </Svg>
      </View>
      <View style={[s.contentContainer, style]}>{children}</View>
    </View>
  );
}

GradientLinear.propTypes = {
  containerStyle: ViewPropTypes.style,
  firstColor: T.string,
  secondColor: T.string,
  width: T.number,
  y1: T.number,
  y2: T.number,
  x1: T.number,
  x2: T.number,
  height: T.number,
  style: ViewPropTypes.style,
  children: T.node,
  onPress: T.func,
  opacity: T.number,
};

export default memo(GradientLinear);
