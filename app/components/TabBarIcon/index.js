import React, { memo } from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '@styles';

import s from './styles';

function TabBarIcon({ name, color, size = 23, focused, ...props }) {
  return (
    <View style={s.container}>
      <MaterialCommunityIcons
        name={name}
        size={size}
        color={color}
        {...props}
      />
      <View
        style={[
          s.bottomBorder,
          {
            backgroundColor: focused ? color : colors.transparent,
            width: size * 1.3,
          },
        ]}
      />
    </View>
  );
}

TabBarIcon.propTypes = {
  name: T.string,
  color: T.string,
  focused: T.bool,
  size: T.number,
};

export default memo(TabBarIcon);
