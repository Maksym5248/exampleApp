import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import * as Font from 'expo-font'; // eslint-disable-line import/no-extraneous-dependencies

import { NavigationService } from '@services';
import { Spinner } from '@components';

import fonts from '../../assets/fonts';

import TabNavigator from './TabNavigator';
import styles, { colors } from '@styles';

const RootNavigator = createAppContainer(TabNavigator);

function RootNavigatorContainer() {
  const [isLoadFonts, setLoadFonts] = useState(false);

  async function loadFonts() {
    await Font.loadAsync(fonts);
    setLoadFonts(true);
  }

  useEffect(() => {
    loadFonts();
  });

  return (
    <View style={styles.fillAll}>
      <StatusBar
        backgroundColor={colors.white}
        barStyle="dark-content"
      />
      {isLoadFonts ? (
        <RootNavigator ref={(ref) => NavigationService.init(ref)} />
      ) : (
        <Spinner size="large" />
      )}
    </View>
  );
}

export default RootNavigatorContainer;
