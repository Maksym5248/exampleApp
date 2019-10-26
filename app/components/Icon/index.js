import React from 'react';
import T from 'prop-types';
import * as Icons from '@expo/vector-icons';

import { colors } from '@styles';
import s from './styles';

const Icon = ({
  size = 22,
  type = 'MaterialCommunityIcons',
  isDisabled,
  color = colors.primary,
  disabledColor = colors.inert,
  style,
  ...props
}) => {
  const CurrentIcon = Icons[type];

  return (
    <CurrentIcon
      size={size}
      style={[s.icon, style]}
      color={isDisabled ? disabledColor : color}
      suppressHighlighting={false}
      {...props}
    />
  );
};

Icon.propTypes = {
  name: T.string,
  onPress: T.func,
  style: T.any,
  size: T.number,
  color: T.string,
  disabledColor: T.string,
  isDisabled: T.bool,
  type: T.oneOf([
    'Entypo',
    'EvilIcons',
    'Feather',
    'FontAwesome',
    'Ionicons',
    'MaterialIcons',
    'MaterialCommunityIcons',
    'SimpleLineIcons',
    'FontAwesome5',
    'Foundation',
  ]),
};

export default Icon;
