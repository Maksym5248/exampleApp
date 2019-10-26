import React from 'react';
import {
  Platform,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '@styles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Spinner = ({
  size = 'small',
  style,
  color = Platform.OS === 'android' ? colors.primary : undefined,
}) => (
  <View style={[styles.root, style]}>
    <ActivityIndicator size={size} color={color} />
  </View>
);

Spinner.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  style: PropTypes.any,
  color: PropTypes.string,
};

export default Spinner;
