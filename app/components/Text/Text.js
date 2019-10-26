import React from 'react';
import { Text as Txt } from 'react-native';
import T from 'prop-types';

import { textStyles as s } from '@styles';

function Text({
  type = 'regularM',
  color,
  uppercase,
  style,
  text,
  children,
  ...props
}) {
  return (
    <Txt
      allowFontScaling={false}
      {...props}
      style={[
        type && s[type],
        style,
        uppercase && s.uppercase,
        color && { color },
      ]}
    >
      {text || children}
    </Txt>
  );
}

Text.propTypes = {
  style: Txt.propTypes.style,
  uppercase: T.bool,
  color: T.string,
  type: T.oneOf([
    'main',
    'title',
    'subTitle',
    'regularS',
    'regularM',
  ]),
  text: T.oneOfType([T.string, T.number]),
  children: T.node,
};

export default React.memo(Text);
